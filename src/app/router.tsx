import { Route, Routes } from 'react-router'
import { ExperiencePage } from '@/features/experience/ExperiencePage'
import { HomePage } from '@/features/home/HomePage'
import { ProjectDetailPage } from '@/features/projects/ProjectDetailPage'
import { ProjectsPage } from '@/features/projects/ProjectsPage'
import { NotFoundPage } from '@/NotFoundPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
