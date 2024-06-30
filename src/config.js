/* global kiwi:true */

export const configBase = 'plugin-avatar-upload';

export const defaultConfig = {
    api_url: '/upload',
    avatars_url: '/avatars/',
    preload_avatars: true,
    set_avatars: true,
};

export function setDefaults(kiwi) {
    kiwi.setConfigDefaults(configBase, defaultConfig);
}

export function setting(name) {
    return kiwi.state.setting([configBase, name].join('.'));
}

export function getSetting(name) {
    return kiwi.state.getSetting(['settings', configBase, name].join('.'));
}

export function setSetting(name, value) {
    return kiwi.state.setSetting(['settings', configBase, name].join('.'), value);
}
