const courses = [
  {
    id: "bim-foundation", code: "PT.01", symbol: "B", title: "BIM Foundation", track: "BIM & MODELING", category: "bim", color: "#00c2c7", level: "Nền tảng", x: 8, y: 47,
    description: "Nắm vững tư duy, thuật ngữ và dòng chảy thông tin BIM trong toàn bộ vòng đời dự án xây dựng.", prerequisite: "Không yêu cầu", outcomes: ["Hiểu BIM khác CAD như thế nào", "Nhận diện vai trò và đầu ra BIM", "Đọc được BEP và quy trình CDE"],
    next: ["revit-structure", "bim-process"], chapters: [
      { title: "Chương 1 — Tư duy BIM", lessons: [
        lesson("BIM là gì?", "05:02", "Nhận diện đúng bản chất của BIM và giá trị đối với dự án.", "BIM là một quy trình quản lý thông tin, không chỉ là mô hình 3D.", ["So sánh một hồ sơ CAD và một mô hình BIM.", "Liệt kê ba nhóm thông tin có trong mô hình."]),
        lesson("BIM trong vòng đời dự án", "04:48", "Hiểu cách dữ liệu được tạo, sử dụng và bàn giao qua các giai đoạn.", "Giá trị lớn nhất xuất hiện khi thông tin được tái sử dụng có chủ đích."),
        lesson("Vai trò trong đội ngũ BIM", "05:17", "Phân biệt BIM Modeler, Coordinator và Manager.", "Mỗi vai trò có trách nhiệm, quyền quyết định và đầu ra khác nhau.")
      ]},
      { title: "Chương 2 — Quy trình & dữ liệu", lessons: [
        lesson("BEP và yêu cầu thông tin", "05:11", "Đọc cấu trúc cơ bản của BIM Execution Plan.", "BEP là cam kết chung về cách đội dự án tạo và kiểm soát thông tin.", [], resources("BEP_Template.pdf", "PDF · 1.2 MB")),
        lesson("Common Data Environment", "04:57", "Hiểu trạng thái và luồng phê duyệt tài liệu trên CDE.", "Một nguồn dữ liệu tin cậy giúp giảm nhầm lẫn phiên bản."),
        lesson("Bài tập tổng kết", "05:35", "Vẽ lại sơ đồ luồng thông tin của một dự án mẫu.", "Luồng rõ ràng phải chỉ ra người tạo, người duyệt, đầu ra và thời điểm.", ["Chọn một đầu ra thiết kế.", "Vẽ các bước từ tạo lập đến phát hành.", "Xác định điểm kiểm soát chất lượng."], resources("BIM_Workflow_Exercise.pdf", "PDF · 840 KB"))
      ]}
    ]
  },
  {
    id: "revit-structure", code: "PT.02", symbol: "R", title: "Revit Structure", track: "BIM & MODELING", category: "bim", color: "#00c2c7", level: "Cơ bản", x: 34, y: 20,
    description: "Xây dựng mô hình kết cấu có tổ chức, đúng tiêu chuẩn và sẵn sàng cho phối hợp liên bộ môn.", prerequisite: "BIM Foundation", outcomes: ["Thiết lập project và level/grid", "Mô hình hóa cấu kiện kết cấu", "Quản lý view, sheet và tham số"], next: ["dynamo", "bim-coordination"],
    chapters: genericChapters("Revit", ["Thiết lập project và template", "Level, Grid và hệ tọa độ", "Mô hình cột, dầm và sàn", "Family và tham số", "View, Filter và Template", "Xuất bản vẽ và kiểm tra mô hình"])
  },
  {
    id: "bim-process", code: "PT.03", symbol: "P", title: "BIM Process", track: "QUY TRÌNH", category: "process", color: "#8b77e8", level: "Cơ bản", x: 32, y: 70,
    description: "Chuẩn hóa cách tạo, kiểm tra, chia sẻ và phê duyệt thông tin trong môi trường dự án BIM.", prerequisite: "BIM Foundation", outcomes: ["Xây dựng workflow rõ trách nhiệm", "Kiểm soát phiên bản dữ liệu", "Thiết lập checklist chất lượng"], next: ["bim-coordination"],
    chapters: genericChapters("quy trình BIM", ["Xác định đầu vào và đầu ra", "Ma trận trách nhiệm", "Quy ước đặt tên", "Kiểm soát chất lượng", "Quy trình issue", "Bàn giao thông tin"])
  },
  {
    id: "dynamo", code: "PT.04", symbol: "D", title: "Dynamo for Revit", track: "LẬP TRÌNH & TỰ ĐỘNG HÓA", category: "code", color: "#ff8a4c", level: "Trung cấp", x: 61, y: 18,
    description: "Tự động hóa các thao tác lặp lại trong Revit bằng tư duy trực quan, dữ liệu và workflow Dynamo.", prerequisite: "Revit Structure", outcomes: ["Đọc và biến đổi dữ liệu trong Dynamo", "Tương tác với phần tử Revit", "Tạo script tự động hóa thực tế"], next: ["python", "bim-manager"],
    chapters: genericChapters("Dynamo", ["Giao diện, Node và Wire", "List và cấu trúc dữ liệu", "Đọc phần tử từ Revit", "Thay đổi tham số hàng loạt", "Hình học trong Dynamo", "Dự án tự động hóa đầu tiên"])
  },
  {
    id: "bim-coordination", code: "PT.05", symbol: "C", title: "BIM Coordination", track: "QUY TRÌNH", category: "process", color: "#8b77e8", level: "Trung cấp", x: 59, y: 67,
    description: "Tổng hợp mô hình, phát hiện xung đột và điều phối issue giữa các bộ môn một cách có hệ thống.", prerequisite: "Revit Structure hoặc BIM Process", outcomes: ["Tạo federated model", "Thiết lập clash test", "Quản lý và đóng issue"], next: ["bim-manager"],
    chapters: genericChapters("phối hợp BIM", ["Nguyên tắc federated model", "Thiết lập Navisworks", "Clash Detection", "Phân loại xung đột", "Issue và báo cáo", "Coordination meeting"])
  },
  {
    id: "python", code: "PT.06", symbol: "Py", title: "Python for BIM", track: "LẬP TRÌNH & TỰ ĐỘNG HÓA", category: "code", color: "#ff8a4c", level: "Nâng cao", x: 82, y: 17,
    description: "Ứng dụng Python để xử lý dữ liệu, xây dựng logic và phát triển các công cụ BIM linh hoạt.", prerequisite: "Dynamo for Revit", outcomes: ["Viết Python rõ ràng và có cấu trúc", "Xử lý dữ liệu BIM", "Tích hợp script vào workflow"], next: ["bim-manager"],
    chapters: genericChapters("Python", ["Biến và kiểu dữ liệu", "Điều kiện và vòng lặp", "Hàm và module", "Đọc ghi dữ liệu", "Python trong Dynamo", "Mini project"])
  },
  {
    id: "bim-manager", code: "PT.07", symbol: "M", title: "BIM Management", track: "QUẢN LÝ", category: "lead", color: "#62b581", level: "Nâng cao", x: 83, y: 61,
    description: "Thiết lập chiến lược, tiêu chuẩn và cơ chế quản trị để BIM tạo giá trị đo lường được cho dự án.", prerequisite: "BIM Coordination", outcomes: ["Xây dựng chiến lược triển khai", "Quản lý chất lượng và nguồn lực", "Đo lường hiệu quả BIM"], next: [],
    chapters: genericChapters("quản lý BIM", ["Mục tiêu và chiến lược BIM", "Xây dựng tiêu chuẩn", "BEP nâng cao", "Quản trị đội ngũ", "KPI và kiểm soát", "Cải tiến liên tục"])
  }
];

function lesson(title, duration, objective, note, practice = [], resourceList = []) {
  return { title, duration, objective, note, practice: practice.length ? practice : ["Xem lại nội dung chính của tập.", "Thực hiện thao tác trên file mẫu.", "Đối chiếu với kết quả mong đợi."], resources: resourceList, video: "" };
}
function resources(name, meta) { return [{ name, meta, url: "" }]; }
function genericChapters(topic, titles) {
  return [
    { title: "Chương 1 — Nền tảng", lessons: titles.slice(0, 3).map((t, i) => lesson(t, `0${5 + (i % 2)}:${i ? "10" : "02"}`, `Nắm được nguyên tắc và thao tác cốt lõi về ${t.toLowerCase()}.`, `Tập trung vào một kết quả nhỏ, có thể áp dụng ngay trong dự án.`)) },
    { title: "Chương 2 — Ứng dụng", lessons: titles.slice(3).map((t, i) => lesson(t, `05:${18 + i * 7}`, `Vận dụng ${topic} để hoàn thành ${t.toLowerCase()}.`, `Kiểm tra đầu ra bằng checklist trước khi chuyển sang bước tiếp theo.`, [], i === 2 ? resources(`${topic.replaceAll(" ", "_")}_practice.zip`, "ZIP · file mẫu") : [])) }
  ];
}

const connections = courses.flatMap(c => c.next.map(next => [c.id, next]));
const state = { activeCourse: courses[0], lessonIndex: 0, scale: 1, tx: 0, ty: 0, dragging: false, startX: 0, startY: 0, progress: loadProgress() };
const $ = id => document.getElementById(id);

function loadProgress() { try { return JSON.parse(localStorage.getItem("pontechLearningProgress")) || {}; } catch { return {}; } }
function saveProgress() { localStorage.setItem("pontechLearningProgress", JSON.stringify(state.progress)); updateProgressUI(); }
function flatLessons(course) { return course.chapters.flatMap((chapter, chapterIndex) => chapter.lessons.map((lesson, lessonIndex) => ({ ...lesson, chapterTitle: chapter.title, chapterIndex, lessonIndex }))); }
function totalLessons() { return courses.reduce((sum, c) => sum + flatLessons(c).length, 0); }
function doneCount(courseId) { return Object.keys(state.progress).filter(k => k.startsWith(`${courseId}:`) && state.progress[k]).length; }
function isCourseDone(course) { return doneCount(course.id) === flatLessons(course).length; }

function renderMap() {
  const host = $("skillNodes"); const lines = $("mapLines");
  [host, lines].forEach(el => { el.style.position = "absolute"; el.style.inset = "0"; el.style.transformOrigin = "0 0"; });
  host.innerHTML = courses.map(c => `<button class="skill-node ${isCourseDone(c) ? "completed" : ""}" data-course="${c.id}" data-category="${c.category}" style="left:${c.x}%;top:${c.y}%;--node-color:${c.color}"><small>${c.code} · ${c.level}</small><b>${c.title}</b><i>↗</i></button>`).join("");
  host.querySelectorAll(".skill-node").forEach(node => node.addEventListener("click", e => { e.stopPropagation(); openCourse(node.dataset.course); }));
  requestAnimationFrame(renderLines); applyMapTransform();
}
function renderLines() {
  const map = $("mapCanvas"), lines = $("mapLines"); const w = map.clientWidth, h = map.clientHeight;
  lines.innerHTML = connections.map(([from, to]) => {
    const a = courses.find(c => c.id === from), b = courses.find(c => c.id === to);
    const x1 = w * a.x / 100 + 93, y1 = h * a.y / 100 + 38, x2 = w * b.x / 100, y2 = h * b.y / 100 + 38;
    const length = Math.hypot(x2 - x1, y2 - y1), angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    return `<i class="map-line" style="left:${x1}px;top:${y1}px;width:${length}px;transform:rotate(${angle}deg)"></i>`;
  }).join("");
}
function applyMapTransform() {
  const transform = `translate(${state.tx}px,${state.ty}px) scale(${state.scale})`;
  $("skillNodes").style.transform = transform; $("mapLines").style.transform = transform;
  document.querySelector(".map-grid").style.transform = `translate(${state.tx}px,${state.ty}px) scale(${state.scale})`;
  $("zoomLabel").textContent = `${Math.round(state.scale * 100)}%`;
}
function setZoom(delta) { state.scale = Math.min(1.35, Math.max(.72, state.scale + delta)); applyMapTransform(); }

function renderCourseCards() {
  $("courseGrid").innerHTML = courses.slice(0, 6).map(c => {
    const lessons = flatLessons(c), progress = Math.round(doneCount(c.id) / lessons.length * 100);
    return `<article class="course-card reveal" tabindex="0" role="button" data-course="${c.id}" data-symbol="${c.symbol}" style="--card-color:${c.color}"><div class="course-card-top"><span class="course-code">${c.code}</span><span class="course-level">${c.level}</span></div><div class="course-card-body"><span class="course-track">${c.track}</span><h3>${c.title}</h3><p>${c.description}</p></div><div class="course-card-bottom"><div class="course-metrics"><span><b>${lessons.length}</b>TẬP</span><span><b>~${lessons.length * 5}'</b>THỜI LƯỢNG</span><span><b>${progress}%</b>TIẾN ĐỘ</span></div><span class="course-arrow">↗</span></div></article>`;
  }).join("");
  document.querySelectorAll(".course-card").forEach(card => { card.addEventListener("click", () => openCourse(card.dataset.course)); card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") openCourse(card.dataset.course); }); });
  observeReveals();
}
function openCourse(id) {
  const course = courses.find(c => c.id === id); if (!course) return; state.activeCourse = course;
  $("modalCode").textContent = course.code; $("modalSymbol").textContent = course.symbol; $("modalTrack").textContent = course.track; $("modalTitle").textContent = course.title; $("modalDescription").textContent = course.description; $("modalPrerequisite").textContent = course.prerequisite; $("modalVisual").style.setProperty("--modal-color", course.color);
  $("modalFacts").innerHTML = `<div class="fact"><span>Trình độ</span><b>${course.level}</b></div><div class="fact"><span>Thời lượng</span><b>~${flatLessons(course).length * 5} phút</b></div><div class="fact"><span>Cấu trúc</span><b>${course.chapters.length} chương · ${flatLessons(course).length} tập</b></div>`;
  $("modalOutcomes").innerHTML = course.outcomes.map(o => `<li>${o}</li>`).join("");
  $("courseModal").classList.add("open"); $("courseModal").setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
}
function closeModal() { $("courseModal").classList.remove("open"); $("courseModal").setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }

function openLearning(course = state.activeCourse, index = 0) {
  state.activeCourse = course; state.lessonIndex = Math.max(0, Math.min(index, flatLessons(course).length - 1)); closeModal();
  $("learningView").classList.add("open"); $("learningView").setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; renderLearning();
}
function closeLearning() { $("learningView").classList.remove("open"); $("learningView").setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; renderMap(); renderCourseCards(); }
function renderLearning() {
  const course = state.activeCourse, lessons = flatLessons(course), current = lessons[state.lessonIndex], key = `${course.id}:${state.lessonIndex}`;
  $("playlistTitle").textContent = course.title; $("playlistSummary").textContent = `${course.chapters.length} chương · ${lessons.length} tập · khoảng ${lessons.length * 5} phút`;
  $("lessonTitle").textContent = current.title; $("lessonMeta").textContent = `${current.chapterTitle.toUpperCase()} · TẬP ${String(state.lessonIndex + 1).padStart(2, "0")}`; $("lessonObjective").textContent = current.objective; $("lessonNote").textContent = current.note; $("videoPlaceholderTitle").textContent = current.title;
  $("practiceSteps").innerHTML = current.practice.map(s => `<li>${s}</li>`).join(""); $("resourceCount").textContent = current.resources.length;
  $("resourceList").innerHTML = current.resources.length ? current.resources.map(r => `<div class="resource-item"><div class="resource-info"><span class="file-icon">FILE</span><span><b>${r.name}</b><small>${r.meta}</small></span></div>${r.url ? `<a href="${r.url}" download>Tải xuống ↓</a>` : `<small>Sẽ bổ sung</small>`}</div>`).join("") : `<p>Không có tài liệu đính kèm cho tập này.</p>`;
  const video = $("lessonVideo"), placeholder = $("videoPlaceholder");
  if (current.video) { video.src = current.video; video.style.display = "block"; placeholder.style.display = "none"; } else { video.pause(); video.removeAttribute("src"); video.style.display = "none"; placeholder.style.display = "grid"; }
  $("completeLesson").classList.toggle("done", !!state.progress[key]); $("completeLesson").textContent = state.progress[key] ? "✓ Đã hoàn thành" : "✓ Đánh dấu hoàn thành";
  $("prevLesson").disabled = state.lessonIndex === 0; $("nextLesson").disabled = state.lessonIndex === lessons.length - 1;
  $("lessonProgressText").textContent = `${doneCount(course.id)}/${lessons.length} tập`; $("lessonProgressBar").style.width = `${doneCount(course.id) / lessons.length * 100}%`;
  $("playlistChapters").innerHTML = course.chapters.map((chapter, ci) => `<div><div class="chapter-title">${chapter.title}</div>${chapter.lessons.map((l, li) => { const globalIndex = lessons.findIndex(x => x.chapterIndex === ci && x.lessonIndex === li); const done = state.progress[`${course.id}:${globalIndex}`]; return `<button class="playlist-lesson ${globalIndex === state.lessonIndex ? "active" : ""} ${done ? "done" : ""}" data-index="${globalIndex}"><span class="lesson-index">${done ? "✓" : String(globalIndex + 1).padStart(2, "0")}</span><b>${l.title}</b><small>${l.duration}</small></button>`; }).join("")}</div>`).join("");
  document.querySelectorAll(".playlist-lesson").forEach(btn => btn.addEventListener("click", () => { state.lessonIndex = +btn.dataset.index; renderLearning(); document.querySelector(".learning-view").scrollTo(0, 0); }));
  sessionStorage.setItem("pontechLastCourse", course.id); sessionStorage.setItem("pontechLastLesson", String(state.lessonIndex));
}
function updateProgressUI() {
  const total = totalLessons(), done = Object.values(state.progress).filter(Boolean).length, percent = Math.round(done / total * 100);
  $("overallPercent").textContent = `${percent}%`; $("overallBar").style.width = `${percent}%`; $("overallPercent").parentElement.style.setProperty("--progress", `${percent * 3.6}deg`); $("progressSummary").textContent = `${done}/${total} bài học đã hoàn thành`;
}
function observeReveals() { const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: .12 }); document.querySelectorAll(".reveal:not(.visible)").forEach(el => observer.observe(el)); }

document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => { document.querySelectorAll(".filter").forEach(b => b.classList.remove("active")); btn.classList.add("active"); document.querySelectorAll(".skill-node").forEach(n => n.classList.toggle("dimmed", btn.dataset.filter !== "all" && n.dataset.category !== btn.dataset.filter)); }));
$("zoomIn").addEventListener("click", () => setZoom(.1)); $("zoomOut").addEventListener("click", () => setZoom(-.1));
$("mapCanvas").addEventListener("wheel", e => { e.preventDefault(); setZoom(e.deltaY > 0 ? -.08 : .08); }, { passive: false });
$("mapCanvas").addEventListener("pointerdown", e => { if (e.target.closest("button")) return; state.dragging = true; state.startX = e.clientX - state.tx; state.startY = e.clientY - state.ty; $("mapCanvas").classList.add("dragging"); $("mapCanvas").setPointerCapture(e.pointerId); });
$("mapCanvas").addEventListener("pointermove", e => { if (!state.dragging) return; state.tx = e.clientX - state.startX; state.ty = e.clientY - state.startY; applyMapTransform(); });
$("mapCanvas").addEventListener("pointerup", () => { state.dragging = false; $("mapCanvas").classList.remove("dragging"); });
$("modalClose").addEventListener("click", closeModal); $("courseModal").addEventListener("click", e => { if (e.target === $("courseModal")) closeModal(); }); $("startCourse").addEventListener("click", () => openLearning(state.activeCourse, doneCount(state.activeCourse.id)));
$("backToSite").addEventListener("click", closeLearning); $("prevLesson").addEventListener("click", () => { state.lessonIndex--; renderLearning(); }); $("nextLesson").addEventListener("click", () => { state.lessonIndex++; renderLearning(); });
$("completeLesson").addEventListener("click", () => { const key = `${state.activeCourse.id}:${state.lessonIndex}`; state.progress[key] = !state.progress[key]; saveProgress(); renderLearning(); });
document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => { document.querySelectorAll(".tab,.tab-panel").forEach(el => el.classList.remove("active")); tab.classList.add("active"); $(`panel-${tab.dataset.tab}`).classList.add("active"); }));
$("continueBtn").addEventListener("click", () => { const id = sessionStorage.getItem("pontechLastCourse") || courses[0].id, index = +(sessionStorage.getItem("pontechLastLesson") || 0); openLearning(courses.find(c => c.id === id), index); });
document.addEventListener("keydown", e => { if (e.key === "Escape") { if ($("learningView").classList.contains("open")) closeLearning(); else closeModal(); } });
window.addEventListener("resize", renderLines);

renderMap(); renderCourseCards(); updateProgressUI(); observeReveals();
