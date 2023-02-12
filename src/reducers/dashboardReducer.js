const initState ={
    data: [
        { Name: 'Luffy', Age: '23', Gender: 'M', LastVisit: '15 Dezembro 2022', id: 1 },
        { Name: 'Zorojuro', Age: '23', Gender: 'M', LastVisit: ' 01 Outubro 2022', id: 2 },
        { Name: 'Sanji', Age: '23', Gender: 'M', LastVisit: '08 Março 2021', id: 3 }],
        
    timeline_root:[
        {id:1, col1: 1, col2:" ", col3:" ", col4:" ", col5:" ", col6:" ",col7:" ",col8:" ", col9:7 },
        {id:2, col1: " ", col2:2, col3:" ", col4:" ",col5:2, col6:" ",col7:" ",col8:2, col9:" " },
        {id:3, col1: " ", col2:" ", col3:" ", col4:" ",col5:" ", col6:" ",col7:5,col8:" ", col9:" " },
        {id:4, col1: " ", col2:" ", col3: 4, col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
        {id:5, col1: " ", col2:1 , col3:" ", col4:2,col5:" ", col6:" ",col7:" ",col8:4, col9:" " },
        {id:6, col1: 3, col2:" ", col3:" ", col4:" ",col5:" ", col6:" ",col7:3 ,col8:" ", col9:" " },
        {id:8, col1: " ", col2:" ", col3:7 , col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
    ],
    oncall:[1,5,8,2,3,4]
}

const dashboardReducer = (state=initState, action)=>{
    return state;
}

export default dashboardReducer;