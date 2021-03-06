import { APIBaseGroup } from './Group';
import { APIMeasurements } from './Measurements';
import { APIMember } from './Member';
import { APITeamRole } from './Role';
import { APIWebhook } from './Webhook';

export interface APITeam {
    additionalGameInfo: unknown;
    additionalInfo: TeamAdditionalInfo;
    alphaInfo: unknown;
    alwaysShowTeamHome: boolean;
    autoSyncDiscordRoles: boolean;
    bannerImages: unknown;
    baseGroup: APIBaseGroup;
    bio: string | null;
    bots: any[];
    canInviteMembers?: boolean;
    canManageTournaments?: boolean;
    canUpdateTeam?: boolean;
    characteristics: string | null;
    createdAt: string;
    customizationInfo: unknown;
    deafenedMembers?: any[];
    description: string;
    discordGuildId: string | null;
    discordServerName: string | null;
    flair: any[];
    followerCount: number;
    followingGroups: string[] | null;
    games: any[];
    homeBannerImageLg: string | null;
    homeBannerImageMd: string | null;
    homeBannerImageSm: string | null;
    id: string;
    insightsInfo: unknown;
    isAdmin?: boolean;
    isFavorite?: boolean;
    isPro: boolean;
    isPublic: boolean;
    isRecruiting: boolean;
    isUserApplicant: boolean;
    isUserBannedFromTeam: boolean;
    isUserInvited: boolean;
    isVerified: boolean;
    lfmStatusByGameId: unknown;
    measurements: APIMeasurements;
    members: APIMember[];
    mutedMembers: any[];
    memberCount?: string;
    membershipRole: string;
    name: string;
    notificationPreference: string | null;
    ownerId: string;
    profilePicture: string;
    rankNames: string | null;
    roleIds?: number[] | null;
    rolesById: {
        [key: string]: APITeamRole;
    };
    rolesVersion: number;
    socialInfo: unknown;
    status: string | null;
    subdomain: string;
    subscriptionInfo: string | null;
    teamDashImage: string | null;
    teamPreferences: string | null;
    timezone: string;
    type: string;
    upsell: null;
    userFollowsTeam: boolean;
    webhooks: APIWebhook[];
}

export interface TeamAdditionalInfo {
    platform: string;
}
