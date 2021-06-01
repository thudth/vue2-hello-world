import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>import('@/components/Home'),
    },
    {
        path: "/students",
        name: "Students",
        component: () =>import('@/components/student/Students'),
    },
    {
        path: "/student-detail",
        name: "StudentDetail",
        component: () =>import('@/components/student/StudentDetail'),
    },
    {
        path: "/teachers",
        name: "Teachers",
        component: () =>import('@/components/teacher/Teachers'),
    },
    {
        path: "/teacher-detail",
        name: "TeacherDetail",
        component: () =>import('@/components/teacher/TeacherDetail'),
    },
    {
        path: "/unicorns",
        name: "Unicorns",
        component: () =>import('@/components/unicorn/Unicorns'),
    },
    {
        path: "/unicorn",
        name: "Unicorn",
        component: () =>import('@/components/unicorn/UnicornDetail'),
    },
    {
        path: "/unicorn-addition",
        name: "UnicornAddition",
        component: () =>import('@/components/unicorn/UnicornDetail'),
    },
    {
        path: "/unicorn-detail/:id",
        name: "UnicornDetail",
        component: () =>import('@/components/unicorn/UnicornDetail'),
    },
    {
        path: "*",
        name: "NotFound",
        component: () =>import('@/components/NotFound'),
    },
];

const router = new VueRouter({mode: 'history', routes: routes});

export default router;
