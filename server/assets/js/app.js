const editCourse = $(".edit-course");
const deleteCourse = $(".delete-course");
const courseFormCancelBtn = $("#course-form-cancel");

deleteCourse.on("click", function () {
  const row = $(this).closest("tr");
  const id = row.find("td:eq(0)").html();
  if (confirm("Confirm delete ?")) {
    $.post(`/api/coursemaster/${id}`, { status: false });
    location.reload();
  }
});

editCourse.on("click", function () {
  const row = $(this).closest("tr");
  const tds = row.find("td");
  const courseId = $(tds[0]).text();
  const courseCode = $(tds[1]).text();
  const courseName = $(tds[2]).text();

  $("#input-course-code").val(courseCode);
  $("#input-course-name").val(courseName);

  const btns = $(".course-form-buttons").find("button");
  $(btns[0]).css({ display: "none" });
  $(btns[1]).css({ display: "inline-block" });

  $(".course-form").attr("action", `/api/coursemaster/${courseId}`);
});

courseFormCancelBtn.on("click", function (event) {
  event.preventDefault();
  $(".course-form").trigger("reset");
});

$(".delete__student").on("click", function () {
  const row = $(this).closest("tr");
  const tds = row.find("td");
  const id = $(tds[0]).text();
  if (confirm("Confirm delete ?")) {
    $.post(`/api/studentmaster/${id}`, { status: false });
    location.reload();
  }
});

