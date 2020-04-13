import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

export default function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

 async function handleAddProjects() {

    //setProjects([...projects, `Novo App ${Date.now()}`]);

   const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "André Mediote de Sousa"
    });
  
    const project = response.data;

    setProjects([...projects,project]);

  }

  return (
    <>
      <Header title="Projects" />


      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProjects}>Adcionar projeto</button>
    </>
  );
}

