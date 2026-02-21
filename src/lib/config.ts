
import type { NavItem, SocialLink } from "$lib/types/nav";

import type { Feature, PromoConfig, SiteConfig } from "./types/config";


export const siteConfig: SiteConfig = {
    version: '0.0.1',
    title: 'SOUNDCAT B2B 관리 설명서',
    description:
        'Soundcat B2B 홈페이지 전반에 걸친 관리 방법에 대해 안내합니다.',
    github: '',
    npm: '',

    quickLinks: [
        { title: 'Customize', href: '/docs/customize' },
        { title: 'Examples', href: '/docs/examples' }
    ],
    logo: '/logo.png',
    logoDark: '/logo.png',
    favicon: '/favicon.png',
};


export let navItems: NavItem[] = [
    {
        title: '문서',
        href: '/docs'
    },

];

export let socialLinks: SocialLink[] = [
    {
        title: 'GitHub',
        href: 'https://github.com/hangminlee',
        icon: 'github'
    },

];


export const features: Feature[] = [
];

export let promoConfig: PromoConfig = {
    title: '이해가 안되는 부분이 있으신가요?',
    description:
        '최대한 자세하게 내용에 대해 안내를 드리려고 노력했습니다만, 분명 이해가 안되거나 적용이 안되는 부분이 있으실 거라 생각합니다. 일을 저지른 책임도 통감하고 있으니 언제든 문의 주시면 도와드릴 수 있는 선에서 도와드리겠습니다.',
    ctaText: "이메일로 문의해주세요",
    ctaLink: 'mailto:happyapril24@gmail.com',
    lightImage: '/images/dev-services-light.jpg',
    darkImage: '/images/dev-services-dark.jpg'
};