// 計算ロジックに関する処理
(() => {
  if (!window.KintaiApp) {
    window.KintaiApp = {};
  }

  const app = window.KintaiApp;

  function calculateWorkingMinutes(startTime, endTime, breakStart, breakEnd) {
    if (!startTime || !endTime) {
      return 0;
    }

    const start = app.parseWorkTime(startTime);
    const end = app.parseWorkTime(endTime);
    const breakMinutes = (app.parseWorkTime(breakEnd) || 0) - (app.parseWorkTime(breakStart) || 0);

    const totalMinutes = end - start - breakMinutes;
    return totalMinutes > 0 ? totalMinutes : 0;
  }

  function calculateNightHours(startTime, endTime) {
    if (!startTime || !endTime) {
      return 0;
    }

    const start = app.parseWorkTime(startTime);
    const end = app.parseWorkTime(endTime);

    if (start === null || end === null) {
      return 0;
    }

    let total = 0;

    for (let t = start; t < end; t++) {
      const hour = t / 60;
      if (hour >= 22 || hour < 5) {
        total++;
      }
    }

    return total / 60;
  }

  function parseWorkTime(value) {
    if (!value) return null;

    const text = value.trim();
    const match = text.match(/^(\d{1,2}):(\d{2})$/);

    if (!match) return null;

    const hour = parseInt(match[1], 10);
    const minute = parseInt(match[2], 10);

    if (minute >= 60) return null;
    if (hour < 6 || hour > 32) return null;

    return hour * 60 + minute;
  }

  function calcWorkingHours() {
    const start = app.parseWorkTime(app.elements.startTime.value);
    const end = app.parseWorkTime(app.elements.endTime.value);
    const breakStart = app.parseWorkTime(app.elements.breakStart.value);
    const breakEnd = app.parseWorkTime(app.elements.breakEnd.value);

    if (start === null || end === null) {
      return 0;
    }

    let work = end - start;

    if (breakStart !== null && breakEnd !== null) {
      work -= breakEnd - breakStart;
    }

    return Math.max(work, 0) / 60;
  }

  function calcOvertime() {
    const work = calcWorkingHours();
    const plan = Number(app.elements.plannedHours.value) || 0;
    return Math.max(work - plan, 0);
  }

  function calcNightHours() {
    const start = app.parseWorkTime(app.elements.startTime.value);
    const end = app.parseWorkTime(app.elements.endTime.value);

    if (start === null || end === null) {
      return 0;
    }

    let total = 0;

    for (let t = start; t < end; t++) {
      const hour = t / 60;
      if (hour >= 22 || hour < 5) {
        total++;
      }
    }

    return total / 60;
  }

  function calcBreakHours() {
    const start = app.parseWorkTime(app.elements.breakStart.value);
    const end = app.parseWorkTime(app.elements.breakEnd.value);

    if (start === null || end === null) {
      return 0;
    }

    return (end - start) / 60;
  }

  function updateCalculationCard() {
    const work = calcWorkingHours();
    const overtime = calcOvertime();
    const night = calcNightHours();
    const breakHour = calcBreakHours();

    app.elements.calcWorkingHours.textContent = `${work.toFixed(2)} h`;
    app.elements.calcOvertimeHours.textContent = `${overtime.toFixed(2)} h`;
    app.elements.calcNightHours.textContent = `${night.toFixed(2)} h`;
    app.elements.calcBreakHours.textContent = `${breakHour.toFixed(2)} h`;

    if (overtime >= 3) {
      app.elements.calcOvertimeHours.style.color = '#ef4444';
    } else {
      app.elements.calcOvertimeHours.style.color = '';
    }
  }

  app.calculateWorkingMinutes = calculateWorkingMinutes;
  app.calculateNightHours = calculateNightHours;
  app.parseWorkTime = parseWorkTime;
  app.calcWorkingHours = calcWorkingHours;
  app.calcOvertime = calcOvertime;
  app.calcNightHours = calcNightHours;
  app.calcBreakHours = calcBreakHours;
  app.updateCalculationCard = updateCalculationCard;
})();
