export default{
    path:'/cinema',
    component:()=>import('@/views/cinema'),
    children:[
        {path:'cinemaList',component:()=>import('@/components/cinemaList')},
        {path:'/cinema',redirect:'cinemaList'}
    ]
}