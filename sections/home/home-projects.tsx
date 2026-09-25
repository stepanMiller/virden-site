import Image from "next/image";
import { projectCases } from "@/content/projects";
import { assetPath } from "@/lib/site-path";
import styles from "./home-projects.module.css";

export function HomeProjects() {
  return (
    <section className={`${styles.projects} shell`} id="projects" aria-labelledby="projects-title">
      <div className={styles.heading}>
        <p className="eyebrow">Проекты</p>
        <h2 id="projects-title">Решения под задачу объекта</h2>
        <p>Реализованные поставки в разных направлениях оснащения.</p>
      </div>

      <div className={styles.grid}>
        {projectCases.map((project, index) => (
          <article className={styles.card} key={project.id}>
            <div className={styles.media}>
              <Image
                src={assetPath(project.image)}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className={styles.meta}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <p>{project.objectType}</p>
            </div>
            <div className={styles.body}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
      <p className={styles.imageNote}>Изображения иллюстрируют направления проектов и не являются фотографиями поставленных изделий.</p>
    </section>
  );
}
