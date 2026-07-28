import { StateKey } from '@/lib/constants'

export interface HandbookLanguage {
    code: string
    name: string
    pdf: string
}

export const HANDBOOK_LANGUAGES: Partial<Record<StateKey, HandbookLanguage[]>> = {
    california: [
        { code: 'en', name: 'English', pdf: '/pdf/California_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/California_Real Estate_Handbook_2026_Spanish.pdf' },
        { code: 'zh', name: 'Chinese', pdf: '/pdf/California_Real Estate_Handbook_2026_Chinese.pdf' },
        { code: 'vi', name: 'Vietnamese', pdf: '/pdf/California_Real Estate_Handbook_2026_Vietnamese.pdf' },
        { code: 'tl', name: 'Tagalog', pdf: '/pdf/California_Real Estate_Handbook_2026_Tagalog.pdf' },
        { code: 'ru', name: 'Russian', pdf: '/pdf/California_Real Estate_Handbook_2026_Russian.pdf' },
        { code: 'pa', name: 'Punjabi', pdf: '/pdf/California_Real Estate_Handbook_2026_Punjabi.pdf' },
        { code: 'fa', name: 'Farsi', pdf: '/pdf/California_Real Estate_Handbook_2026_Farsi.pdf' },
        { code: 'hy', name: 'Armenian', pdf: '/pdf/California_Real Estate_Handbook_2026_Armenian.pdf' },
    ],
    ohio: [
        { code: 'en', name: 'English', pdf: '/pdf/Ohio_BMV_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Ohio_BMV_Handbook_2026_Spanish.pdf' },
    ],
    texas: [
        { code: 'en', name: 'English', pdf: '/pdf/Texas_DPS_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Texas_DPS_Handbook_2026_Spanish.pdf' },
    ],
    florida: [
        { code: 'en', name: 'English', pdf: '/pdf/Florida_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Florida_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    'new-york': [
        { code: 'en', name: 'English', pdf: '/pdf/New_York_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/New_York_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    virginia: [
        { code: 'en', name: 'English', pdf: '/pdf/Virginia_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Virginia_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    'new-jersey': [
        { code: 'en', name: 'English', pdf: '/pdf/New_Jersey_MVC_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/New_Jersey_MVC_Handbook_2026_Spanish.pdf' },
        { code: 'zh', name: 'Chinese', pdf: '/pdf/New_Jersey_MVC_Handbook_2026_Chinese.pdf' },
        { code: 'tl', name: 'Tagalog', pdf: '/pdf/New_Jersey_MVC_Handbook_2026_Tagalog.pdf' },
        { code: 'gu', name: 'Gujarati', pdf: '/pdf/New_Jersey_MVC_Handbook_2026_Gujarati.pdf' },
        { code: 'ko', name: 'Korean', pdf: '/pdf/New_Jersey_MVC_Handbook_2026_Korean.pdf' },
    ],
    washington: [
        { code: 'en', name: 'English', pdf: '/pdf/Washington_DOL_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Washington_DOL_Handbook_2026_Spanish.pdf' },
        { code: 'ru', name: 'Russian', pdf: '/pdf/Washington_DOL_Handbook_2026_Russian.pdf' },
        { code: 'vi', name: 'Vietnamese', pdf: '/pdf/Washington_DOL_Handbook_2026_Vietnamese.pdf' },
        { code: 'ja', name: 'Japanese', pdf: '/pdf/Washington_DOL_Handbook_2026_Japanese.pdf' },
        { code: 'ko', name: 'Korean', pdf: '/pdf/Washington_DOL_Handbook_2026_Korean.pdf' },
    ],
    nevada: [
        { code: 'en', name: 'English', pdf: '/pdf/Nevada_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Nevada_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    oregon: [
        { code: 'en', name: 'English', pdf: '/pdf/Oregon_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Oregon_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    maryland: [
        { code: 'en', name: 'English', pdf: '/pdf/Maryland_MVA_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Maryland_MVA_Handbook_2026_Spanish.pdf' },
    ],
    montana: [
        { code: 'en', name: 'English', pdf: '/pdf/Montana_MVD_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Montana_MVD_Handbook_2026_Spanish.pdf' },
    ],
    'north-carolina': [
        { code: 'en', name: 'English', pdf: '/pdf/North_Carolina_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/North_Carolina_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    'north-dakota': [
        { code: 'en', name: 'English', pdf: '/pdf/North_Dakota_DOT_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/North_Dakota_DOT_Handbook_2026_Spanish.pdf' },
    ],
    'south-dakota': [
        { code: 'en', name: 'English', pdf: '/pdf/South_Dakota_DPS_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/South_Dakota_DPS_Handbook_2026_Spanish.pdf' },
    ],
    illinois: [
        { code: 'en', name: 'English', pdf: '/pdf/Illinois_SOS_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Illinois_SOS_Handbook_2026_Spanish.pdf' },
    ],
    maine: [
        { code: 'en', name: 'English', pdf: '/pdf/Maine_BMV_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Maine_BMV_Handbook_2026_Spanish.pdf' },
    ],
    pennsylvania: [
        { code: 'en', name: 'English', pdf: '/pdf/Pennsylvania_PennDOT_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Pennsylvania_PennDOT_Handbook_2026_Spanish.pdf' },
        { code: 'ru', name: 'Russian', pdf: '/pdf/Pennsylvania_PennDOT_Handbook_2026_Russian.pdf' },
    ],
    wisconsin: [
        { code: 'en', name: 'English', pdf: '/pdf/Wisconsin_DOT_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Wisconsin_DOT_Handbook_2026_Spanish.pdf' },
    ],
    'west-virginia': [
        { code: 'en', name: 'English', pdf: '/pdf/West_Virginia_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/West_Virginia_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    utah: [
        { code: 'en', name: 'English', pdf: '/pdf/Utah_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Utah_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    hawaii: [
        { code: 'en', name: 'English', pdf: '/pdf/Hawaii_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Hawaii_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    arizona: [
        { code: 'en', name: 'English', pdf: '/pdf/Arizona_MVD_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Arizona_MVD_Handbook_2026_Spanish.pdf' },
    ],
    idaho: [
        { code: 'en', name: 'English', pdf: '/pdf/Idaho_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Idaho_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    'new-mexico': [
        { code: 'en', name: 'English', pdf: '/pdf/New_Mexico_MVD_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/New_Mexico_MVD_Handbook_2026_Spanish.pdf' },
    ],
    kansas: [
        { code: 'en', name: 'English', pdf: '/pdf/Kansas_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Kansas_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    missouri: [
        { code: 'en', name: 'English', pdf: '/pdf/Missouri_DOR_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Missouri_DOR_Handbook_2026_Spanish.pdf' },
    ],
    iowa: [
        { code: 'en', name: 'English', pdf: '/pdf/Iowa_DOT_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Iowa_DOT_Handbook_2026_Spanish.pdf' },
        { code: 'ru', name: 'Russian', pdf: '/pdf/Iowa_DOT_Handbook_2026_Russian.pdf' },
    ],
    michigan: [
        { code: 'en', name: 'English', pdf: '/pdf/Michigan_SOS_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Michigan_SOS_Handbook_2026_Spanish.pdf' },
    ],
    louisiana: [
        { code: 'en', name: 'English', pdf: '/pdf/Louisiana_OMV_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Louisiana_OMV_Handbook_2026_Spanish.pdf' },
    ],
    arkansas: [
        { code: 'en', name: 'English', pdf: '/pdf/Arkansas_DFA_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Arkansas_DFA_Handbook_2026_Spanish.pdf' },
    ],
    tennessee: [
        { code: 'en', name: 'English', pdf: '/pdf/Tennessee_DOS_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Tennessee_DOS_Handbook_2026_Spanish.pdf' },
    ],
    kentucky: [
        { code: 'en', name: 'English', pdf: '/pdf/Kentucky_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Kentucky_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    indiana: [
        { code: 'en', name: 'English', pdf: '/pdf/Indiana_BMV_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Indiana_BMV_Handbook_2026_Spanish.pdf' },
    ],
    delaware: [
        { code: 'en', name: 'English', pdf: '/pdf/Delaware_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Delaware_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    'rhode-island': [
        { code: 'en', name: 'English', pdf: '/pdf/Rhode_Island_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Rhode_Island_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    vermont: [
        { code: 'en', name: 'English', pdf: '/pdf/Vermont_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Vermont_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    connecticut: [
        { code: 'en', name: 'English', pdf: '/pdf/Connecticut_Real Estate_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Connecticut_Real Estate_Handbook_2026_Spanish.pdf' },
    ],
    massachusetts: [
        { code: 'en', name: 'English', pdf: '/pdf/Massachusetts_RMV_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/Massachusetts_RMV_Handbook_2026_Spanish.pdf' },
    ],
}

export const CDL_HANDBOOK_LANGUAGES: Partial<Record<StateKey, HandbookLanguage[]>> = {
    california: [
        { code: 'en', name: 'English', pdf: '/pdf/California_CDL_Handbook_2026.pdf' },
        { code: 'es', name: 'Spanish', pdf: '/pdf/California_CDL_Handbook_2026_Spanish.pdf' },
    ],
}

