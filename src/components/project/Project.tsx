import { useTranslation } from 'react-i18next';
import styles from './Project.module.scss';
import { ProjectItem } from './ProjectItem';
import hanwhaLogo from './assets/hanwhaLogo.png';
import misumiLogo from './assets/misumiLogo.svg';
import naedamLogo from './assets/naedamLogo.jpg';
import { Title } from '@/components/ui/title';

type ProjectItem = {
    projectName: string,
    logoImg: string,
    duration: string,
    skillKeywords: string,
}

export const Project: React.FC = () => {

    const { t } = useTranslation();

    const projects: ProjectItem[] = [
        {
            projectName: t('common.project.hanwha.name'),
            logoImg: hanwhaLogo.src,
            duration: t('common.project.hanwha.duration'),
            skillKeywords: t('common.project.hanwha.skillKeywords'),
        },
        {
            projectName: t('common.project.naedam.name'),
            logoImg: naedamLogo.src,
            duration: t('common.project.naedam.duration'),
            skillKeywords: t('common.project.naedam.skillKeywords'),
        },
        {
            projectName: t('common.project.misumiMaintenance.name'),
            logoImg: misumiLogo.src,
            duration: t('common.project.misumiMaintenance.duration'),
            skillKeywords: t('common.project.misumiMaintenance.skillKeywords'),
        },
        {
            projectName: t('common.project.misumiRenewal.name'),
            logoImg: misumiLogo.src,
            duration: t('common.project.misumiRenewal.duration'),
            skillKeywords: t('common.project.misumiRenewal.skillKeywords'),
        },
    ];

    return (
        <section>
            <Title title={t('common.project.title')} />
            <div className={styles.projects}>
                {projects.map((item, index) => 
                    <ProjectItem 
                        key={item.projectName}
                        idx={index}
                        projectName={item.projectName}
                        duration={item.duration}
                        logoImg={item.logoImg}
                        skillKeywords={item.skillKeywords}
                    />
                )}
            </div>
        </section>
    )
}