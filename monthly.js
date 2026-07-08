// 月間集計に関する処理
(() => {
  if (!window.KintaiApp) {
    window.KintaiApp = {};
  }

  const app = window.KintaiApp;

  function getCurrentPeriod() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    let year = currentYear;
    let month = currentMonth + 1;

    if (today.getDate() < 16) {
      month--;
      if (month === 0) {
        month = 12;
        year--;
      }
    }

    const start = today.getDate() >= 16
      ? new Date(currentYear, currentMonth, 16)
      : new Date(currentYear, currentMonth - 1, 16);

    const end = today.getDate() >= 16
      ? new Date(currentYear, currentMonth + 1, 15)
      : new Date(currentYear, currentMonth, 15);

    return { year, month, start, end };
  }

  function isCurrentPeriod(dateString) {
    const date = new Date(dateString);
    const period = getCurrentPeriod();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (year === period.year && month === period.month && day >= 16) {
      return true;
    }

    let nextMonth = period.month + 1;
    let nextYear = period.year;

    if (nextMonth === 13) {
      nextMonth = 1;
      nextYear++;
    }

    if (year === nextYear && month === nextMonth && day <= 15) {
      return true;
    }

    return false;
  }

  function updateMonthlySummary() {
    const current = app.state.records.filter((record) => isCurrentPeriod(record.date));

    let workDays = 0;
    let workHours = 0;
    let overtime = 0;
    let night = 0;

    current.forEach((record) => {
      workDays++;
      workHours += (record.workingMinutes || 0) / 60;
      overtime += record.overtimeHours || 0;
      night += record.nightHours || 0;
    });

    app.elements.monthWorkDays.textContent = `${workDays} 日`;
    app.elements.monthWorkingHours.textContent = `${workHours.toFixed(2)} h`;
    app.elements.monthOvertimeHours.textContent = `${overtime.toFixed(2)} h`;
    app.elements.monthNightHours.textContent = `${night.toFixed(2)} h`;
  }

  app.getCurrentPeriod = getCurrentPeriod;
  app.isCurrentPeriod = isCurrentPeriod;
  app.updateMonthlySummary = updateMonthlySummary;
})();
