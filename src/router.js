import VueRouter from "vue-router";
import Home from "./components/Home";
import Students from "./components/student/Students";
import StudentDetail from "./components/student/StudentDetail";
import Teachers from "./components/teacher/Teachers";
import TeacherDetail from "./components/teacher/TeacherDetail";
import NotFound from "./components/NotFound";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/students",
        name: "Students",
        component: Students,
    },
    {
        path: "/student-detail",
        name: "StudentDetail",
        component: StudentDetail,
    },
    {
        path: "/teachers",
        name: "Teachers",
        component: Teachers,
    },
    {
        path: "/teacher-detail",
        name: "TeacherDetail",
        component: TeacherDetail,
    },
    {
        path: "*",
        name: "NotFound",
        component: NotFound,
    },
];

const router = new VueRouter({mode: 'history', routes: routes});

export default router;
