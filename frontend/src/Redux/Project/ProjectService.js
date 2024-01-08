import axios from 'axios'
import { baseUrl, config } from '../../Utils/Utils'

const createProject = async(projectdata)=>{
    const response = await axios.post(`${baseUrl}/createproject`,{
        name:projectdata.name,
        description:projectdata.description,
        techused:projectdata.techused,
        repolink:projectdata.repolink,
        deployedlink:projectdata.deployedlink,
        tags:projectdata.tags,
        pic:projectdata.pic
    },config)
    // console.log(response);
    return response.data
}

const getProjects = async()=>{
    const response = await axios.get(`${baseUrl}/allproject`,config)
    // console.log(response);
    return response.data
}
const updateProject = async(projectData)=>{
    const response = await axios.put(`${baseUrl}/editProject/${projectData.id}`,
    {_id:projectData.id,name:projectData.name,description:projectData.description,repolink:projectData.repolink,tags:projectData.tags,techused:projectData.techused,deployedlink:projectData.deployedlink}
    ,config)
    // console.log(response);
    // if(response.data){
    //     localStorage.setItem("project",JSON.stringify(response.data.result))
    // }
    return response.data
}

//deletepost
const deleteProject = async(postId)=>{
    const response = await axios.delete(`${baseUrl}/deleteproject/${postId}`,config)
    console.log(response);
    return response
}

export const ProjectService = {
    createProject,
    getProjects,
    deleteProject,
    updateProject
}