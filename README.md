# Parsing Data to components through props

This entails passing data from a parent component to children component  - Popularly known as props drilling. The data passed from parent component can be destructure in the children componet. 



Parent
The below snippet shows how to passing a data from parent component to child component. Service here is a child component 
function App(){ 
return (
    <Service data= {data}>
)
}

Child

function ({data}){
    <!-- or -->
    <!-- const {value} = props.data -->
return(
    <>{data}</>
)
}