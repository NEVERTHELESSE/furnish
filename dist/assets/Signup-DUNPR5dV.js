import{r as d,j as e,L as c,d as t}from"./index-COkKONBE.js";import{a as u}from"./axios-upsvKRUO.js";function x(){const[n,l]=d.useState({username:"",email:"",password:"",confirmPassword:""}),o="https://blugbackend-1.onrender.com/api/";function a(r){l(s=>({...s,[r.target.name]:r.target.value}))}function i(r){r.preventDefault(),n.password!=n.confirmPassword?alert("password not match"):u.post(o+"user/createAccount",{userInfo:n}).then(s=>{s.data.username?(t("user successfully created",{variant:"success"}),window.location.replace("/")):s.data=="duplicate"?t("user already exist! kindly login",{variant:"warning"}):t("There was an error while creating user!! kindly try again",{variant:"error"})})}return e.jsx("div",{className:"flex justify-center items-center h-[calc(100vh-4rem)]",children:e.jsxs("form",{onSubmit:i,className:"bg-secondaryColor flex flex-col p-5 rounded-2xl w-[30rem] items-center",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"size-[3rem]",children:e.jsx("img",{src:"/logo.png",alt:""})}),e.jsx("span",{className:"text-2xl font-bold",children:"Blugs"})]}),e.jsx("input",{type:"text",required:!0,placeholder:"Username",name:"username",className:"w-full bg-fadedColor p-4 my-3 rounded-2xl ",minLength:3,onChange:a}),e.jsx("input",{type:"email",required:!0,placeholder:"Email Address",name:"email",onChange:a,className:"w-full bg-fadedColor p-4 my-3 rounded-2xl "}),e.jsx("input",{type:"password",required:!0,placeholder:"Password",className:"w-full bg-fadedColor p-4 my-3 rounded-2xl ",onChange:a,name:"password"}),e.jsx("input",{type:"password",required:!0,placeholder:"Confirm Password",onChange:a,name:"confirmPassword",className:"w-full bg-fadedColor p-4 my-3 rounded-2xl "}),e.jsx("button",{type:"submit",className:"bg-primaryColor text p-4 rounded-2xl w-full",children:"Signup"}),e.jsx("p",{className:"text-center my-2",children:"Already have an account?"}),e.jsx(c,{to:"/signin",className:"text-center my-2",children:"Signin"})]})})}export{x as default};
