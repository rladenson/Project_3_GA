import React, { useState }from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
// import { createProject } from '../Redux/Project/ProjectAction'
import  {useDispatch, useSelector} from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'


function NewProject(props) {

    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [techused, setTechused] = useState("")
    const [tags, setTags] = useState("")
    const [repolink, setRepolink] = useState("")
    const [deployedlink, setDeployedlink] = useState("")

    const postState = useSelector((state)=>state.post)
    const {isError,isPostSuccess,message} = postState
    // console.log(postState);

    const projectData=async()=>{

        const data = new FormData()
        await data.append("file",image)
        await data.append("upload_preset","devPort")
        await data.append("cloud_name","drhvmsq7q")
        await fetch('https://api.cloudinary.com/v1_1/drhvmsq7q/image/upload',{
            method:"post", body:data
        })
        .then(res=>res.json())
        .then(async data=>{
           
            let projectdata = {
                name,
                description,
                techused,
                repolink,
                deployedlink,
                tags,
                pic:data.url
            }

            await dispatch(createProject(projectdata))
            if(isProjectSuccess){
                setName('')
                setDescription('')
                setImage('')
                toast.success(message)
            }
        })
        .catch(err=>{
            if(isError){
                toast.error(message)
            }
        })
    }
  return (
    <Container className="d-flex justify-content-center mt-5 mb-5">
      <Row>
        <Col>
          <h1>New Project</h1>
          <Form onSubmit="">
            <Form.Group
              className="mb-3 text-start"
              controlId="validationCustom01"
            >
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                value={name} onChange={(e)=>setName(e.target.value)}
                
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              className="mb-3 text-start"
              controlId="validationCustom02"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Description"
                value={description} onChange={(e)=>setDescription(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3 text-start"
              controlId="validationCustom02"
            >
              <Form.Label>Tech Stack</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Tech Stack"
                value={techused} onChange={(e)=>setTechused(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3 text-start"
              controlId="validationCustom02"
            >
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tags"
                value={tags} onChange={(e)=>setTags(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3 text-start"
              controlId="validationCustom02"
            >
              <Form.Label>GitHub Link</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="GitHub Link"
                value={repolink} onChange={(e)=>setRepolink(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3 text-start"
              controlId="validationCustom02"
            >
              <Form.Label>Deployed Link</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Deployed Project"
                value={deployedlink} onChange={(e)=>setDeployedlink(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3 text-start"
              controlId="validationCustom02"
            >
              <Form.Label>Image</Form.Label>
              <Form.Control
                required
                type="file"
                placeholder="Image"
                value={image} onChange={(e)=>setImage(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="success" onClick={projectData}>
              Add Project
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default NewProject;


// import React, { useState } from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";

// function NewProject(props) {
//   const [validated, setValidated] = useState(false);

//   // State to hold formData
//   const [newForm, setNewForm] = useState({
//     name: "",
//     description: "",
//     tech: "",
//     tags: "",
//     github: "",
//     deploy: "",
//     images: "",
//   });

//   // Handle Change function for form
//   const handleChange = (event) => {
//     setNewForm({ ...newForm, [event.target.name]: event.target.value });
//   };

//   //   const handleSubmit = (event) => {
//   //     const form = event.currentTarget;
//   //     if (form.checkValidity() === false) {
//   //       event.preventDefault();
//   //       event.stopPropagation();
//   //     }

//   //     setValidated(true);

//   //   };

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);

//     event.preventDefault();
//     props.createProject(newForm);
//     setNewForm({
//       name: "",
//       description: "",
//       tech: "",
//       tags: "",
//       github: "",
//       deploy: "",
//       images: "",
//     });
//   };

//   return (
//     <Container className="d-flex justify-content-center mt-5 mb-5">
//       <Row>
//         <Col>
//           <h1>New Project</h1>
//           <Form noValidate validated={validated} onSubmit={handleSubmit}>
//             <Form.Group
//               className="mb-3 text-start"
//               controlId="validationCustom01"
//             >
//               <Form.Label>Project Name</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="Project Name"
//                 value={newForm.name}
//                 name="name"
//                 onChange={handleChange}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group
//               className="mb-3 text-start"
//               controlId="validationCustom02"
//             >
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 required
//                 as="textarea"
//                 placeholder="Description"
//                 value={newForm.description}
//                 name="description"
//                 onChange={handleChange}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group
//               className="mb-3 text-start"
//               controlId="validationCustom02"
//             >
//               <Form.Label>Tech Stack</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="Tech Stack"
//                 value={newForm.tech}
//                 name="tech"
//                 onChange={handleChange}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group
//               className="mb-3 text-start"
//               controlId="validationCustom02"
//             >
//               <Form.Label>Tags</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Tags"
//                 value={newForm.tags}
//                 name="tags"
//                 onChange={handleChange}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group
//               className="mb-3 text-start"
//               controlId="validationCustom02"
//             >
//               <Form.Label>GitHub Link</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="GitHub Link"
//                 value={newForm.github}
//                 name="github"
//                 onChange={handleChange}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group
//               className="mb-3 text-start"
//               controlId="validationCustom02"
//             >
//               <Form.Label>Deployed Link</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="Deployed Project"
//                 value={newForm.deploy}
//                 name="deploy"
//                 onChange={handleChange}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group
//               className="mb-3 text-start"
//               controlId="validationCustom02"
//             >
//               <Form.Label>Images</Form.Label>
//               <Form.Control
//                 required
//                 type="file"
//                 placeholder="Images"
//                 value={newForm.images}
//                 name="images"
//                 onChange={handleChange}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>

//             <Button type="submit" variant="success">
//               Add Project
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default NewProject;
