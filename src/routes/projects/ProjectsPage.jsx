import {
  Link,
  Outlet
} from 'react-router-dom'

function ProjectsPage() {
  return (
    <>
      <h1>Project</h1>

      <nav>
        <Link to='first-project'>First Project</Link>
        <Link to='second-project'>Second Project</Link>
      </nav>

      <Outlet />
    </>
  )
}


export default ProjectsPage