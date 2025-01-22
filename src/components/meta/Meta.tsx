import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Meta = () => {
	const { t } = useTranslation();
	return (
		<Head>
            <title>{t('common.meta.title')}</title>
            <meta name="description" key="descriptionKey" content={t('common.meta.description')} />
			<meta name="keywords" key="keywordsKey" content={t('common.meta.keyword')} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="naver-site-verification" content="dce7684b42ec210aee7522c5eaee271cd670182d" />
		</Head>
	);
};

Meta.displayName = 'Meta';
