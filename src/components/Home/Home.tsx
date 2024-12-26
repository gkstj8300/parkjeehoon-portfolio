import React from "react";
import styles from './Home.module.scss';
import { AboutMe } from '@/components/aboutMe';
import { Education } from "@/components/education";
import { Experience } from '@/components/experience';
import { Introduce } from '@/components/introduce';
import { Project } from '@/components/project';

type Props = {
    className?: string;
}

export const Home: React.FC<Props> = () => {
    return (
        <div className={styles.home}>
            <AboutMe />
            <Introduce />
            <Experience />
            <Project />
            <Education />
        </div>
    );
};

Home.displayName = 'Home';
