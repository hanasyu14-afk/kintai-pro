// 勤怠入力と記録操作に関する処理
(() => {
  if (!window.KintaiApp) {
    window.KintaiApp = {};
  }

  const app = window.KintaiApp;

  function createRecord(date, workType, plannedHours, startTime, endTime, breakStart, breakEnd, remarks) {
    const workingMinutes = app.calculateWorkingMinutes(startTime, endTime, breakStart, breakEnd);
    const overtimeHours = Math.max(0, workingMinutes / 60 - plannedHours);
    const nightHours = app.calculateNightHours(startTime, endTime);

    return {
      id: crypto.randomUUID(),
      date,
      workType,
      plannedHours,
      startTime,
      endTime,
      breakStart,
      breakEnd,
      remarks,
      workingMinutes,
      overtimeHours,
      nightHours,
      createdAt: new Date().toISOString(),
    };
  }

  app.createRecord = createRecord;
})();
