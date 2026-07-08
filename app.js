// ===============================
// シフトテンプレート
// ===============================
const SHIFT_TEMPLATES = {
  "070": { start: "07:00", end: "16:00", planned: 8 },
  "071": { start: "07:15", end: "16:15", planned: 8 },
  "072": { start: "07:30", end: "16:30", planned: 8 },
  "073": { start: "07:45", end: "16:45", planned: 8 },

  "080": { start: "08:00", end: "17:00", planned: 8 },
  "081": { start: "08:15", end: "17:15", planned: 8 },
  "082": { start: "08:30", end: "17:30", planned: 8 },
  "083": { start: "08:45", end: "17:45", planned: 8 },

  "090": { start: "09:00", end: "18:00", planned: 8 },
  "091": { start: "09:15", end: "18:15", planned: 8 },
  "092": { start: "09:30", end: "18:30", planned: 8 },
  "093": { start: "09:45", end: "18:45", planned: 8 },

  "100": { start: "10:00", end: "19:00", planned: 8 },
  "101": { start: "10:15", end: "19:15", planned: 8 },
  "102": { start: "10:30", end: "19:30", planned: 8 },
  "103": { start: "10:45", end: "19:45", planned: 8 },

  "110": { start: "11:00", end: "20:00", planned: 8 },
  "111": { start: "11:15", end: "20:15", planned: 8 },
  "112": { start: "11:30", end: "20:30", planned: 8 },
  "113": { start: "11:45", end: "20:45", planned: 8 },

  "120": { start: "12:00", end: "21:00", planned: 8 },
  "121": { start: "12:15", end: "21:15", planned: 8 },
  "122": { start: "12:30", end: "21:30", planned: 8 },
  "123": { start: "12:45", end: "21:45", planned: 8 },

  "130": { start: "13:00", end: "22:00", planned: 8 },
  "131": { start: "13:15", end: "22:15", planned: 8 },
  "132": { start: "13:30", end: "22:30", planned: 8 },
  "133": { start: "13:45", end: "22:45", planned: 8 },

  "140": { start: "14:00", end: "23:00", planned: 8 },
  "141": { start: "14:15", end: "23:15", planned: 8 },
  "142": { start: "14:30", end: "23:30", planned: 8 },
  "143": { start: "14:45", end: "23:45", planned: 8 },

  "150": { start: "15:00", end: "24:00", planned: 8 },
  "151": { start: "15:15", end: "24:15", planned: 8 },
  "152": { start: "15:30", end: "24:30", planned: 8 },
  "153": { start: "15:45", end: "24:45", planned: 8 },

  "160": { start: "16:00", end: "25:00", planned: 8 },
  "161": { start: "16:15", end: "25:15", planned: 8 },
  "162": { start: "16:30", end: "25:30", planned: 8 },
  "163": { start: "16:45", end: "25:45", planned: 8 },

  "170": { start: "17:00", end: "26:00", planned: 8 },
  "171": { start: "17:15", end: "26:15", planned: 8 },
  "172": { start: "17:30", end: "26:30", planned: 8 },
  "173": { start: "17:45", end: "26:45", planned: 8 },

  "180": { start: "18:00", end: "27:00", planned: 8 },
  "181": { start: "18:15", end: "27:15", planned: 8 },
  "182": { start: "18:30", end: "27:30", planned: 8 },
  "183": { start: "18:45", end: "27:45", planned: 8 },

  "190": { start: "19:00", end: "28:00", planned: 8 },
  "191": { start: "19:15", end: "28:15", planned: 8 },
  "192": { start: "19:30", end: "28:30", planned: 8 },
  "193": { start: "19:45", end: "28:45", planned: 8 },

  "200": { start: "20:00", end: "29:00", planned: 8 },
  "201": { start: "20:15", end: "29:15", planned: 8 },
  "202": { start: "20:30", end: "29:30", planned: 8 },
  "203": { start: "20:45", end: "29:45", planned: 8 },

  "210": { start: "21:00", end: "30:00", planned: 8 },
  "211": { start: "21:15", end: "30:15", planned: 8 },
  "212": { start: "21:30", end: "30:30", planned: 8 },
  "213": { start: "21:45", end: "30:45", planned: 8 },

  "220": { start: "22:00", end: "31:00", planned: 8 },
  "221": { start: "22:15", end: "31:15", planned: 8 },
  "222": { start: "22:30", end: "31:30", planned: 8 },
  "223": { start: "22:45", end: "31:45", planned: 8 },

  "230": { start: "23:00", end: "32:00", planned: 8 }
};

(() => {
  // すべてのデータはブラウザの localStorage に保存します。
  window.KintaiApp = window.KintaiApp || {};
  const app = window.KintaiApp;
  const STORAGE_KEY = 'kintai-pro-v0.1-records';
  const STAMP_KEY = 'kintai-pro-v0.1-stamps';
  const EMPLOYEE_KEY = 'kintai-pro-v0.1-employees';
  const USER_KEY = 'kintai-pro-v0.1-user';
  const SETTINGS_KEY = 'kintai-pro-settings';

  //========================================
  // Part9
  // 従業員管理
  //========================================

  //========================================
  // Part10
  // ログイン管理
  //========================================

  app.state = {
    records: [],
    employees: [],
    stamps: [],
    currentEmployeeId: null,
    user: null,
  };

  app.elements = {
    sidebarPeriod: document.getElementById('sidebarPeriod'),
    topbarPeriod: document.getElementById('topbarPeriod'),
    headerTitle: document.getElementById('headerTitle'),
    shiftCode: document.getElementById('shiftCode'),
    calcWorkingHours: document.getElementById('calcWorkingHours'),
    calcOvertimeHours: document.getElementById('calcOvertimeHours'),
    calcNightHours: document.getElementById('calcNightHours'),
    calcBreakHours: document.getElementById('calcBreakHours'),
    monthWorkDays: document.getElementById('monthWorkDays'),
    monthWorkingHours: document.getElementById('monthWorkingHours'),
    monthOvertimeHours: document.getElementById('monthOvertimeHours'),
    monthNightHours: document.getElementById('monthNightHours'),
    monthlyTable: document.getElementById('monthlyTable'),
    summaryPeriod: document.getElementById('summaryPeriod'),
    summaryList: document.getElementById('summaryList'),
    recentEntries: document.getElementById('recentEntries'),
    recordsTable: document.getElementById('recordsTable'),
    recordCountText: document.getElementById('recordCountText'),
    statWorkDays: document.getElementById('statWorkDays'),
    statWorkingHours: document.getElementById('statWorkingHours'),
    statOvertime: document.getElementById('statOvertime'),
    statNightHours: document.getElementById('statNightHours'),
    attendanceForm: document.getElementById('attendanceForm'),
    recordDate: document.getElementById('recordDate'),
    workType: document.getElementById('workType'),
    plannedHours: document.getElementById('plannedHours'),
    startTime: document.getElementById('startTime'),
    endTime: document.getElementById('endTime'),
    breakStart: document.getElementById('breakStart'),
    breakEnd: document.getElementById('breakEnd'),
    remarks: document.getElementById('remarks'),
    punchHistory: document.getElementById('punchHistory'),
    newEntryButton: document.getElementById('newEntryButton'),
    resetFormButton: document.getElementById('resetFormButton'),
    settingsForm: document.getElementById('settingsForm'),
    hourlyRate: document.getElementById('hourlyRate'),
    overtimeRate: document.getElementById('overtimeRate'),
    nightRate: document.getElementById('nightRate'),
    holidayRate: document.getElementById('holidayRate'),
    paidLeaveTotal: document.getElementById('paidLeaveTotal'),
    themeSelect: document.getElementById('themeSelect'),
    exportCsvButton: document.getElementById('exportCsvButton'),
    settingsMessage: document.getElementById('settingsMessage'),
  };

  const state = app.state;
  const elements = app.elements;

  document.addEventListener('DOMContentLoaded', init);

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('loginButton');

    if (btn) {
      btn.onclick = function () {
        login(
          document.getElementById('loginId').value,
          document.getElementById('loginPassword').value
        );
      };
    }
  });

  function init() {
    bindEvents();
    loadRecords();
    loadEmployees();
    loadStamps();
    loadSettings();
    applyTheme();
    seedEmployee();
    seedDemoDataIfNeeded();
    resetForm();
    render();
    updateMonthlySummary();
    renderCalendar();
    renderLeaveSummary();
  }

  function bindEvents() {
    // サイドバーのタブ切り替え
    document.querySelectorAll('.nav-link').forEach((button) => {
      button.addEventListener('click', () => {
        switchView(button.dataset.target);
      });
    });

    // 新規登録ボタン
    elements.newEntryButton.addEventListener('click', () => {
      switchView('attendance');
      resetForm();
    });

    // 登録フォーム
    elements.attendanceForm.addEventListener('submit', handleSubmit);
    elements.resetFormButton.addEventListener('click', resetForm);

    // テーブル内のボタンイベントは親要素に委譲
    elements.recordsTable.addEventListener('click', handleTableClick);

    // =================================
    // シフトコード自動入力
    // =================================
    elements.shiftCode?.addEventListener('change', () => {
      const code = elements.shiftCode.value;

      if (!SHIFT_TEMPLATES[code]) return;

      const shift = SHIFT_TEMPLATES[code];

      elements.startTime.value = shift.start;
      elements.endTime.value = shift.end;
      elements.plannedHours.value = shift.planned;
      updateCalculationCard();
    });

    [
      elements.startTime,
      elements.endTime,
      elements.breakStart,
      elements.breakEnd,
      elements.plannedHours,
      elements.punchHistory,
    ].forEach((element) => {
      element?.addEventListener('input', updateCalculationCard);
    });

    const nowButton = document.getElementById('nowTimeButton');
    if (nowButton) {
      nowButton.addEventListener('click', () => {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        elements.startTime.value = `${h}:${m}`;
        updateCalculationCard();
      });
    }

    //========================================
    // 打刻ボタン
    //========================================
    document.getElementById('clockInButton')?.addEventListener('click', clockIn);
    document.getElementById('clockOutButton')?.addEventListener('click', clockOut);

    elements.settingsForm?.addEventListener('submit', handleSettingsSubmit);
    elements.exportCsvButton?.addEventListener('click', exportToCsv);
  }

  function switchView(targetId) {
    document.querySelectorAll('.view').forEach((view) => {
      view.classList.toggle('active', view.id === targetId);
    });

    document.querySelectorAll('.nav-link').forEach((button) => {
      button.classList.toggle('active', button.dataset.target === targetId);
    });

    elements.headerTitle.textContent = targetId === 'dashboard' ? 'ダッシュボード' : '勤怠入力';
  }

  function loadRecords() {
    const raw = localStorage.getItem(STORAGE_KEY);
    state.records = raw ? JSON.parse(raw) : [];
  }

  function saveRecords() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.records));
  }

  //========================================
  // 打刻データ保存
  //========================================

  function loadStamps() {
    const raw = localStorage.getItem(STAMP_KEY);
    state.stamps = raw ? JSON.parse(raw) : [];
  }

  function saveStamps() {
    localStorage.setItem(STAMP_KEY, JSON.stringify(state.stamps));
  }

  function loadSettings() {
    const raw = localStorage.getItem(SETTINGS_KEY);
    const defaults = {
      hourly: 1100,
      overtimeRate: 1.25,
      nightRate: 1.25,
      holidayRate: 1.35,
      paidLeaveTotal: 10,
      theme: 'dark',
    };

    const saved = raw ? JSON.parse(raw) : {};
    app.settings = { ...defaults, ...saved };
    app.salary = {
      hourly: app.settings.hourly,
      overtimeRate: app.settings.overtimeRate,
      nightRate: app.settings.nightRate,
      holidayRate: app.settings.holidayRate,
    };
    app.leave = { ...app.leave, total: app.settings.paidLeaveTotal };
  }

  function saveSettings() {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(app.settings));
  }

  function applyTheme() {
    const theme = app.settings?.theme || 'dark';
    document.body.classList.toggle('theme-light', theme === 'light');
    document.body.classList.toggle('theme-dark', theme !== 'light');
  }

  //========================================
  // 従業員保存
  //========================================

  function loadEmployees() {
    const raw = localStorage.getItem(EMPLOYEE_KEY);
    state.employees = raw ? JSON.parse(raw) : [];
  }

  function saveEmployees() {
    localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(state.employees));
  }

 

  function seedEmployee() {

    if (state.employees.length > 0)
      return;


    const employee = {

      id: crypto.randomUUID(),

      number: "001",

      name: "山田 太郎",


      department: "店舗",

      hourly: 1100

    };


    state.employees.push(employee);


    state.currentEmployeeId =
      employee.id;


    saveEmployees();


  }

  function switchEmployee(id) {
    state.currentEmployeeId = id;

    const employee = state.employees.find((e) => e.id === id);

    if (employee) {
      app.salary.hourly = employee.hourly;
    }

    render();
  }

  function renderEmployeeSelect() {
    const select = document.getElementById('employeeSelect');

    if (!select) return;

    select.innerHTML = state.employees
      .map((emp) => `
<option value="${emp.id}" ${emp.id === state.currentEmployeeId ? 'selected' : ''}>
${emp.number}: ${emp.name}
</option>
`)
      .join('');

    select.onchange = function () {
      switchEmployee(this.value);
    };
  }


  function parsePunchHistory(value) {
    if (!value) return null;

    const segments = value
      .split(/\n|;|；/)
      .map((line) => line.trim())
      .filter(Boolean);

    let totalMinutes = 0;

    segments.forEach((segment) => {
      const times = segment.match(/\d{1,2}:\d{2}/g) || [];
      if (times.length >= 2) {
        const start = parseWorkTime(times[0]);
        const end = parseWorkTime(times[1]);
        if (start !== null && end !== null) {
          totalMinutes += Math.max(end - start, 0);
        }
      }
    });

    return totalMinutes > 0 ? totalMinutes : null;
  }

  function renderWeeklyReport() {
    const area = document.getElementById('reportSummary');
    if (!area) return;

    const now = new Date();
    const start = new Date(now);
    start.setDate(now.getDate() - 6);
    const records = state.records.filter((record) => {
      const date = new Date(`${record.date}T00:00:00`);
      return date >= start && date <= now;
    });

    const workDays = records.filter((record) => record.workType !== '有給休暇' && record.workType !== '欠勤' && record.workType !== '公休').length;
    const totalHours = records.reduce((sum, record) => sum + (record.workingMinutes || 0) / 60, 0);
    const overtimeHours = records.reduce((sum, record) => sum + (record.overtimeHours || 0), 0);

    area.innerHTML = `
      <div class="report-card">
        <strong>週間実働:</strong> ${totalHours.toFixed(1)}h
      </div>
      <div class="report-card">
        <strong>勤務日数:</strong> ${workDays}日
      </div>
      <div class="report-card">
        <strong>残業合計:</strong> ${overtimeHours.toFixed(1)}h
      </div>
    `;
  }

  function renderNotifications() {
    const area = document.getElementById('notifications');
    if (!area) return;

    const today = formatDateKey(new Date());
    const todayRecord = state.records.find((record) => record.date === today);
    const messages = [];

    if (!todayRecord) {
      messages.push('本日はまだ勤怠記録がありません。');
    } else {
      messages.push('本日の記録は入力済みです。');
    }

    const overtime = state.records.reduce((sum, record) => sum + (record.overtimeHours || 0), 0);
    if (overtime > 5) {
      messages.push('残業が多めです。確認してください。');
    }

    area.innerHTML = messages.map((message) => `<div class="notification-item">${message}</div>`).join('');
  }

  function renderSettings() {
    const form = elements.settingsForm;
    if (!form) return;

    elements.hourlyRate.value = app.settings?.hourly || 1100;
    elements.overtimeRate.value = app.settings?.overtimeRate || 1.25;
    elements.nightRate.value = app.settings?.nightRate || 1.25;
    elements.holidayRate.value = app.settings?.holidayRate || 1.35;
    elements.paidLeaveTotal.value = app.settings?.paidLeaveTotal || 10;
    elements.themeSelect.value = app.settings?.theme || 'dark';
  }

  function handleSettingsSubmit(event) {
    event.preventDefault();

    app.settings = {
      hourly: Number(elements.hourlyRate.value) || 1100,
      overtimeRate: Number(elements.overtimeRate.value) || 1.25,
      nightRate: Number(elements.nightRate.value) || 1.25,
      holidayRate: Number(elements.holidayRate.value) || 1.35,
      paidLeaveTotal: Number(elements.paidLeaveTotal.value) || 10,
      theme: elements.themeSelect.value || 'dark',
    };

    app.salary = {
      hourly: app.settings.hourly,
      overtimeRate: app.settings.overtimeRate,
      nightRate: app.settings.nightRate,
      holidayRate: app.settings.holidayRate,
    };
    app.leave = { ...app.leave, total: app.settings.paidLeaveTotal };

    saveSettings();
    applyTheme();
    renderSettings();
    if (elements.settingsMessage) {
      elements.settingsMessage.textContent = '設定を保存しました。';
    }
    render();
  }

  function exportToCsv() {
    const rows = state.records.map((record) => [
      record.date,
      record.workType,
      record.startTime || '',
      record.endTime || '',
      record.workingMinutes || 0,
      record.overtimeHours || 0,
      record.remarks || '',
      record.punchHistory || '',
    ]);

    const header = ['date', 'workType', 'startTime', 'endTime', 'workingMinutes', 'overtimeHours', 'remarks', 'punchHistory'];
    const csv = [header, ...rows].map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'kintai-export.csv';
    link.click();
    URL.revokeObjectURL(url);
  }

  

    state.user = user;
    state.currentEmployeeId = user.employeeId || 'EMP-001';

    localStorage.setItem('loginUser', JSON.stringify(user));
    showMain();
    return true;
  }

 

  function seedDemoDataIfNeeded() {
    if (state.records.length > 0) {
      return;
    }

    const today = new Date();
    const sampleDate = formatDateKey(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1));
    const sampleDate2 = formatDateKey(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3));

    state.records = [
      createRecord(sampleDate, '通常勤務', 8, '09:00', '18:00', '12:00', '12:45', '通常営業'),
      createRecord(sampleDate2, '休日勤務', 6, '10:00', '17:00', '13:00', '13:30', '休日出勤'),
    ];

    saveRecords();
  }

  function createRecord(date, workType, plannedHours, startTime, endTime, breakStart, breakEnd, remarks) {
    if (app.createRecord) {
      return app.createRecord(date, workType, plannedHours, startTime, endTime, breakStart, breakEnd, remarks);
    }

    const workingMinutes = calculateWorkingMinutes(startTime, endTime, breakStart, breakEnd);
    const overtimeHours = Math.max(0, workingMinutes / 60 - plannedHours);
    const nightHours = calculateNightHours(startTime, endTime);

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

  function clockIn() {
    const now = getNowTime();

    const stamp = {
      id: crypto.randomUUID(),
      employeeId: state.currentEmployeeId,
      date: now.date,
      clockIn: now.time,
      clockOut: '',
      createdAt: new Date().toISOString(),
    };

    state.stamps.push(stamp);
    saveStamps();
    alert(`出勤しました\n${now.time}`);
    renderStampHistory();
  }

  function clockOut() {
    const now = getNowTime();

    const stamp = [...state.stamps].reverse().find(
      (s) => s.employeeId === state.currentEmployeeId && s.date === now.date && !s.clockOut
    );

    if (!stamp) {
      alert('出勤打刻がありません');
      return;
    }

    stamp.clockOut = now.time;
    saveStamps();
    alert(`退勤しました\n${now.time}`);
    renderStampHistory();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      id: state.editingId || crypto.randomUUID(),
      employeeId: state.currentEmployeeId,
      date: elements.recordDate.value,
      workType: elements.workType.value,
      plannedHours: Number(elements.plannedHours.value || 0),
      startTime: elements.startTime.value,
      endTime: elements.endTime.value,
      breakStart: elements.breakStart.value,
      breakEnd: elements.breakEnd.value,
      remarks: elements.remarks.value,
      punchHistory: elements.punchHistory.value,
      workingMinutes: calculateWorkingMinutes(elements.startTime.value, elements.endTime.value, elements.breakStart.value, elements.breakEnd.value),
      overtimeHours: Math.max(0, (calculateWorkingMinutes(elements.startTime.value, elements.endTime.value, elements.breakStart.value, elements.breakEnd.value) / 60) - Number(elements.plannedHours.value || 0)),
      nightHours: calculateNightHours(elements.startTime.value, elements.endTime.value),
      createdAt: new Date().toISOString(),
    };

    if (state.editingId) {
      state.records = state.records.map((record) => (record.id === state.editingId ? payload : record));
    } else {
      state.records.push(payload);
    }

    state.editingId = null;
    saveRecords();
    resetForm();
    render();
    updateMonthlySummary();
  }

  function resetForm() {
    state.editingId = null;
    elements.attendanceForm.reset();
    elements.recordDate.value = formatDateKey(new Date());
    elements.workType.value = '通常勤務';
    elements.plannedHours.value = 8;
  }

  function handleTableClick(event) {
    const button = event.target.closest('button[data-action]');
    if (!button) {
      return;
    }

    const id = button.dataset.id;
    const action = button.dataset.action;

    if (action === 'edit') {
      const target = state.records.find((record) => record.id === id);
      if (!target) {
        return;
      }

      state.editingId = target.id;
      fillForm(target);
      switchView('attendance');
      elements.headerTitle.textContent = '勤怠入力';
      return;
    }

    if (action === 'delete') {
      const confirmed = window.confirm('この勤怠データを削除しますか？');
      if (!confirmed) {
        return;
      }

      state.records = state.records.filter((record) => record.id !== id);
      saveRecords();
      render();
      updateMonthlySummary();
    }
  }

  function fillForm(record) {
    elements.recordDate.value = record.date;
    elements.workType.value = record.workType;
    elements.plannedHours.value = record.plannedHours;
    elements.startTime.value = record.startTime || '';
    elements.endTime.value = record.endTime || '';
    elements.breakStart.value = record.breakStart || '';
    elements.breakEnd.value = record.breakEnd || '';
    elements.remarks.value = record.remarks || '';
  }

  function render() {
    const period = getCurrentPeriod();
    const periodRecords = getPeriodRecords(state.records, period);
    const sortedRecords = [...periodRecords].sort((a, b) => b.date.localeCompare(a.date));

    elements.sidebarPeriod.textContent = `${formatDate(period.start)} 〜 ${formatDate(period.end)}`;
    elements.topbarPeriod.textContent = `${formatDate(period.start)} 〜 ${formatDate(period.end)}`;
    elements.summaryPeriod.textContent = `${formatDate(period.start)} 〜 ${formatDate(period.end)}`;

    renderSummary(sortedRecords);
    renderRecentEntries(sortedRecords);
    renderRecordTable(sortedRecords);
    updateMonthlySummary();
    renderSalary();
    renderCalendar();
    renderLeaveSummary();
    renderPayroll();
    renderEmployeeSelect();
    renderStampHistory();
    renderWeeklyReport();
    renderNotifications();
    renderSettings();
  }

  function renderSummary(records) {
    const workDays = records.filter((record) => record.workType !== '有給休暇' && record.workType !== '欠勤' && record.workType !== '公休').length;
    const totalWorkingHours = records.reduce((total, record) => total + (record.workingMinutes || 0) / 60, 0);
    const overtimeHours = records.reduce((total, record) => total + (record.overtimeHours || 0), 0);
    const nightHours = records.reduce((total, record) => total + (record.nightHours || 0), 0);

    elements.statWorkDays.textContent = `${workDays}`;
    elements.statWorkingHours.textContent = `${totalWorkingHours.toFixed(1)}h`;
    elements.statOvertime.textContent = `${overtimeHours.toFixed(1)}h`;
    elements.statNightHours.textContent = `${nightHours.toFixed(1)}h`;

    const summaryItems = [
      {
        title: '勤務日数',
        value: `${workDays}日`,
      },
      {
        title: '合計実働',
        value: `${totalWorkingHours.toFixed(1)}h`,
      },
      {
        title: '残業時間',
        value: `${overtimeHours.toFixed(1)}h`,
      },
      {
        title: '深夜勤務',
        value: `${nightHours.toFixed(1)}h`,
      },
    ];

    elements.summaryList.innerHTML = summaryItems
      .map(
        (item) => `
          <div class="summary-item">
            <span>${item.title}</span>
            <strong>${item.value}</strong>
          </div>
        `,
      )
      .join('');
  }

  function renderRecentEntries(records) {
    const recent = [...records].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

    if (recent.length === 0) {
      elements.recentEntries.innerHTML = '<div class="empty-state">まだ勤怠データがありません。入力画面から追加してください。</div>';
      return;
    }

    const rows = recent
      .map((record) => {
        return `
          <table>
            <thead>
              <tr>
                <th>日付</th>
                <th>区分</th>
                <th>実働</th>
                <th>備考</th>
              </tr>
            </thead>
            <tbody>
              ${recent
                .map(
                  (item) => `
                    <tr>
                      <td>${formatDisplayDate(item.date)}</td>
                      <td>${item.workType}</td>
                      <td>${formatHours(item.workingMinutes / 60)}</td>
                      <td>${item.remarks || '—'}</td>
                    </tr>
                  `,
                )
                .join('')}
            </tbody>
          </table>
        `;
      })
      .join('');

    elements.recentEntries.innerHTML = rows;
  }

  function renderRecordTable(records) {
    elements.recordCountText.textContent = `${records.length}件`;

    if (records.length === 0) {
      elements.recordsTable.innerHTML = '<div class="empty-state">この期間のデータはありません。</div>';
      return;
    }

    const rows = records
      .map((record) => {
        return `
          <tr>
            <td>${formatDisplayDate(record.date)}</td>
            <td>${record.workType}</td>
            <td>${record.startTime || '-'} / ${record.endTime || '-'}</td>
            <td>${formatHours(record.workingMinutes / 60)}</td>
            <td>${formatHours(record.overtimeHours)}</td>
            <td>${record.remarks || '—'}${record.punchHistory ? `<br><small>${record.punchHistory.replace(/\n/g, ' · ')}</small>` : ''}</td>
            <td>
              <button class="table-action edit" type="button" data-action="edit" data-id="${record.id}">編集</button>
              <button class="table-action delete" type="button" data-action="delete" data-id="${record.id}">削除</button>
            </td>
          </tr>
        `;
      })
      .join('');

    elements.recordsTable.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>日付</th>
            <th>区分</th>
            <th>出退勤</th>
            <th>実働</th>
            <th>残業</th>
            <th>備考</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

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

    // 16日〜翌15日で期間を定義します。
    const start = today.getDate() >= 16
      ? new Date(currentYear, currentMonth, 16)
      : new Date(currentYear, currentMonth - 1, 16);

    const end = today.getDate() >= 16
      ? new Date(currentYear, currentMonth + 1, 15)
      : new Date(currentYear, currentMonth, 15);

    return {
      year,
      month,
      start,
      end,
    };
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
    if (app.updateMonthlySummary) {
      app.updateMonthlySummary();
      return;
    }

    const current = state.records.filter((record) => {
      return isCurrentPeriod(record.date);
    });

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

    elements.monthWorkDays.textContent = `${workDays} 日`;
    elements.monthWorkingHours.textContent = `${workHours.toFixed(2)} h`;
    elements.monthOvertimeHours.textContent = `${overtime.toFixed(2)} h`;
    elements.monthNightHours.textContent = `${night.toFixed(2)} h`;
  }

  function getPeriodRecords(records, period) {
    return records.filter((record) => {
      if (
        record.employeeId &&
        record.employeeId !== state.currentEmployeeId
      ) {
        return false;
      }

      const recordDate = new Date(`${record.date}T00:00:00`);
      return recordDate >= period.start && recordDate <= period.end;
    });
  }

  function calculateWorkingMinutes(startTime, endTime, breakStart, breakEnd) {
    if (app.calculateWorkingMinutes) {
      return app.calculateWorkingMinutes(startTime, endTime, breakStart, breakEnd);
    }

    if (!startTime || !endTime) {
      return 0;
    }

    const start = toMinutes(startTime);
    const end = toMinutes(endTime);
    const breakMinutes = toMinutes(breakEnd) - toMinutes(breakStart);

    const totalMinutes = end - start - breakMinutes;
    return totalMinutes > 0 ? totalMinutes : 0;
  }

  function calculateNightHours(startTime, endTime) {
    if (app.calculateNightHours) {
      return app.calculateNightHours(startTime, endTime);
    }

    if (!startTime || !endTime) {
      return 0;
    }

    const start = toMinutes(startTime);
    const end = toMinutes(endTime);

    const nightStart = 22 * 60;
    const nightEnd = 24 * 60;
    const nextDayNightEnd = 5 * 60;

    const overlap = Math.max(0, Math.min(end, nightEnd) - Math.max(start, nightStart));
    const overnight = Math.max(0, Math.min(end, nextDayNightEnd) - Math.max(start, 0));

    const total = overlap + overnight;
    return total / 60;
  }

  function toMinutes(timeValue) {
    const [hours, minutes] = timeValue.split(':').map(Number);
    return hours * 60 + minutes;
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  }

  function formatDisplayDate(value) {
    const date = new Date(`${value}T00:00:00`);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }

  function formatDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function getNowTime() {
    const now = new Date();

    return {
      date: formatDateKey(now),
      time: String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0')
    };
  }

  function formatHours(value) {
    if (!Number.isFinite(value)) {
      return '0.0h';
    }
    return `${value.toFixed(1)}h`;
  }

  //========================================
  // 時刻文字列→分
  // 6:00～32:00対応
  //========================================
  function parseWorkTime(value) {
    if (app.parseWorkTime) {
      return app.parseWorkTime(value);
    }

    if (!value) return null;

    const text = value.trim();
    const match = text.match(/^(\d{1,2}):(\d{2})$/);

    if (!match) return null;

    let hour = parseInt(match[1], 10);
    let minute = parseInt(match[2], 10);

    if (minute >= 60) return null;
    if (hour < 6 || hour > 32) return null;

    return hour * 60 + minute;
  }

  function calcWorkingHours() {
    if (app.calcWorkingHours) {
      return app.calcWorkingHours();
    }
    const start = parseWorkTime(elements.startTime.value);
    const end = parseWorkTime(elements.endTime.value);
    const breakStart = parseWorkTime(elements.breakStart.value);
    const breakEnd = parseWorkTime(elements.breakEnd.value);

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
    if (app.calcOvertime) {
      return app.calcOvertime();
    }

    const work = calcWorkingHours();
    const plan = Number(elements.plannedHours.value) || 0;

    return Math.max(work - plan, 0);
  }

  function calcNightHours() {
    if (app.calcNightHours) {
      return app.calcNightHours();
    }
    const start = parseWorkTime(elements.startTime.value);
    const end = parseWorkTime(elements.endTime.value);

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
    if (app.calcBreakHours) {
      return app.calcBreakHours();
    }

    const start = parseWorkTime(elements.breakStart.value);
    const end = parseWorkTime(elements.breakEnd.value);

    if (start === null || end === null) {
      return 0;
    }

    return (end - start) / 60;
  }

  function updateCalculationCard() {
    if (app.updateCalculationCard) {
      app.updateCalculationCard();
      return;
    }
    const work = calcWorkingHours();
    const overtime = calcOvertime();
    const night = calcNightHours();
    const breakHour = calcBreakHours();

    elements.calcWorkingHours.textContent = `${work.toFixed(2)} h`;
    elements.calcOvertimeHours.textContent = `${overtime.toFixed(2)} h`;
    elements.calcNightHours.textContent = `${night.toFixed(2)} h`;
    elements.calcBreakHours.textContent = `${breakHour.toFixed(2)} h`;

    if (overtime >= 3) {
      elements.calcOvertimeHours.style.color = '#ef4444';
    } else {
      elements.calcOvertimeHours.style.color = '';
    }
  }

  //========================================
  // Part6
  // 給与計算システム
  //========================================
  app.salary = {
    hourly: 1100,
    overtimeRate: 1.25,
    nightRate: 1.25,
    holidayRate: 1.35,
  };

  //----------------------------------------
  // 給与計算
  //----------------------------------------
  function calculateSalary(records) {
    let normal = 0;
    let overtime = 0;
    let night = 0;
    let holiday = 0;

    records.forEach((record) => {
      const hours = (record.workingMinutes || 0) / 60;
      const over = record.overtimeHours || 0;
      const nightHour = record.nightHours || 0;

      if (record.workType === '休日勤務') {
        holiday += hours;
      } else {
        normal += hours;
      }

      overtime += over;
      night += nightHour;
    });

    const base = normal * app.salary.hourly;
    const overPay = overtime * app.salary.hourly * app.salary.overtimeRate;
    const nightPay = night * app.salary.hourly * app.salary.nightRate;
    const holidayPay = holiday * app.salary.hourly * app.salary.holidayRate;

    return {
      normalHours: normal,
      overtimeHours: overtime,
      nightHours: night,
      salary: Math.round(base + overPay + nightPay + holidayPay),
    };
  }

  //----------------------------------------
  // 給与表示
  //----------------------------------------
  function renderSalary() {
    const period = getCurrentPeriod();
    const records = getPeriodRecords(state.records, period);
    const salary = calculateSalary(records);
    const target = document.getElementById('salaryAmount');

    if (target) {
      target.textContent = `${salary.salary.toLocaleString()} 円`;
    }
  }

  app.renderSalary = renderSalary;

  //========================================
  // Part7
  // カレンダー・有給・欠勤管理
  //========================================

  //----------------------------------------
  // 有給設定
  //----------------------------------------
  app.leave = {
    total: 10,
    used: 0,
  };

  //----------------------------------------
  // 有給残日数計算
  //----------------------------------------
  function calculatePaidLeave() {

    const period =
      getCurrentPeriod();


    const records =
      getPeriodRecords(
        state.records,
        period
      );


    const used =
      records.filter(
        r => r.workType === "有給休暇"
      ).length;



    return {

      total: 10,

      used,

      remain:
        10 - used

    };

  }

  //----------------------------------------
  // 欠勤日数計算
  //----------------------------------------
  function calculateAbsent() {

    const period =
      getCurrentPeriod();


    return getPeriodRecords(
      state.records,
      period
    )
      .filter(
        r => r.workType === "欠勤"
      )
      .length;

  }

  function renderStampHistory() {
    const area = document.getElementById('stampHistory');

    if (!area) return;

    const list = state.stamps
      .filter((s) => s.employeeId === state.currentEmployeeId)
      .reverse();

    if (list.length === 0) {
      area.innerHTML = '打刻履歴なし';
      return;
    }

    area.innerHTML = `
      <table>
        <tr>
          <th>日付</th>
          <th>出勤</th>
          <th>退勤</th>
        </tr>
        ${list.map((s) => `
          <tr>
            <td>${s.date}</td>
            <td>${s.clockIn || '-'}</td>
            <td>${s.clockOut || '-'}</td>
          </tr>
        `).join('')}
      </table>
    `;
  }

  //----------------------------------------
  // カレンダー生成
  //----------------------------------------
  function renderCalendar() {

    const area =
      document.getElementById("calendar");


    if (!area) return;


    const period =
      getCurrentPeriod();


    let start =
      new Date(period.start);


    let html = `

  <table class="calendar-table">

  <thead>
  <tr>
  <th>日付</th>
  <th>曜日</th>
  <th>勤務</th>
  <th>時間</th>
  </tr>
  </thead>

  <tbody>

  `;


    while (start <= period.end) {


      const key =
        formatDateKey(start);


      const record =
        state.records.find(
          r => r.date === key
        );


      let status = "";


      if (record) {

        if (record.workType === "有給休暇") {
          status = "🟦 有給";
        }

        else if (record.workType === "欠勤") {
          status = "🟥 欠勤";
        }

        else if (record.workType === "公休") {
          status = "⬜ 公休";
        }

        else {
          status = "🟩 勤務";
        }

      }
      else {

        status = "—";

      }



      let time = "";


      if (record) {

        if (record.startTime) {

          time =
            record.startTime +
            "〜" +
            record.endTime;

        }

      }


      html += `

    <tr>

    <td>
    ${formatDate(start)}
    </td>


    <td>
    ${["日", "月", "火", "水", "木", "金", "土"]
        [start.getDay()]}
    </td>


    <td>
    ${status}
    </td>


    <td>
    ${time}
    </td>


    </tr>

    `;



      start.setDate(
        start.getDate() + 1
      );

    }


    html += `

  </tbody>
  </table>

  `;


    area.innerHTML =
      html;

  }

  //----------------------------------------
  // 有給・欠勤表示
  //----------------------------------------
  function renderLeaveSummary() {
    const leave = calculatePaidLeave();
    const absent = calculateAbsent();
    const area = document.getElementById('leaveSummary');

    if (!area) return;

    area.innerHTML = `
      <div>
        有給残：<strong>${leave.remain}日</strong>
      </div>
      <div>
        使用済：<strong>${leave.used}日</strong>
      </div>
      <div>
        欠勤：<strong>${absent}日</strong>
      </div>
    `;
  }

  app.renderCalendar = renderCalendar;
  app.renderLeaveSummary = renderLeaveSummary;

  //========================================
  // Part8
  // 給与明細（15日締め対応）
  //========================================

  //----------------------------------------
  // 給与明細計算
  //----------------------------------------

  function createPayroll() {

    const period =
      getCurrentPeriod();


    const records =
      getPeriodRecords(
        state.records,
        period
      );


    let normalHours = 0;
    let overtimeHours = 0;
    let nightHours = 0;
    let holidayHours = 0;



    records.forEach(record => {


      const hours =
        (record.workingMinutes || 0) / 60;


      if (record.workType === "休日勤務") {

        holidayHours += hours;

      }
      else {

        normalHours += hours;
      }


      overtimeHours +=
        record.overtimeHours || 0;


      nightHours +=
        record.nightHours || 0;


    });


    const hourly =
      app.salary?.hourly || 1100;


    const normalPay =
      normalHours * hourly;


    const overtimePay =
      overtimeHours *
      hourly *
      1.25;


    const nightPay =
      nightHours *
      hourly *
      1.25;


    const holidayPay =
      holidayHours *
      hourly *
      1.35;



    return {


      start:
        formatDate(period.start),


      end:
        formatDate(period.end),


      normalHours,


      overtimeHours,


      nightHours,


      holidayHours,


      normalPay,


      overtimePay,


      nightPay,


      holidayPay,


      total:
        Math.round(
          normalPay +
          overtimePay +
          nightPay +
          holidayPay
        )

    };


  }



  //----------------------------------------
  // 給与明細表示
  //----------------------------------------

  function renderPayroll() {

    const area =
      document.getElementById(
        "payroll"
      );


    if (!area) return;



    const data =
      createPayroll();


    area.innerHTML = `

 <div class="payroll-sheet">

 <h2>
 給与明細
 </h2>


 <p>
 締期間：
 ${data.start}
 ～ 
 ${data.end}
 </p>


 <table>

 <tr>
 <th>項目</th>
 <th>時間</th>
 <th>金額</th>
 </tr>



 <tr>
 <td>通常勤務</td>
 <td>${data.normalHours.toFixed(2)}h</td>
 <td>${data.normalPay.toLocaleString()}円</td>
 </tr>


 <tr>
 <td>残業手当</td>
 <td>${data.overtimeHours.toFixed(2)}h</td>
 <td>${data.overtimePay.toLocaleString()}円</td>
 </tr>


 <tr>
 <td>深夜手当</td>
 <td>${data.nightHours.toFixed(2)}h</td>
 <td>${data.nightPay.toLocaleString()}円</td>
 </tr>


 <tr>
 <td>休日手当</td>
 <td>${data.holidayHours.toFixed(2)}h</td>
 <td>${data.holidayPay.toLocaleString()}円</td>
 </tr>


 </table>


 <h3>
 総支給額：
 ${data.total.toLocaleString()}円
 </h3>


 <button
 onclick="window.print()">
 印刷 / PDF保存
 </button>


 </div>

 `;


  }



  app.renderPayroll =
    renderPayroll;
//========================================
// PWA Service Worker
//========================================

if (
  "serviceWorker" in navigator
) {
  navigator.serviceWorker.register(
    "service-worker.js"
  );
}

})();
