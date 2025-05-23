/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { sync } from 'vuex-router-sync'
import { translate, translatePlural } from '@nextcloud/l10n'
import Vue from 'vue'

import PhotosPublic from './PhotosPublic.vue'
import router from './router/index.js'
import store from './store/index.js'

sync(store, router)

Vue.prototype.t = translate
Vue.prototype.n = translatePlural

// TODO: remove when we have a proper fileinfo standalone library
// original scripts are loaded from
// https://github.com/nextcloud/server/blob/5bf3d1bb384da56adbf205752be8f840aac3b0c5/lib/private/legacy/template.php#L120-L122
window.addEventListener('DOMContentLoaded', () => {
	if (!window.OCA.Files) {
		window.OCA.Files = {}
	}
	// register unused client for the sidebar to have access to its parser methods
	Object.assign(window.OCA.Files, { App: { fileList: { filesClient: OC.Files.getClient() } } }, window.OCA.Files)
})

export default new Vue({
	el: '#content',
	// eslint-disable-next-line vue/match-component-file-name
	name: 'PhotosRoot',
	router,
	store,
	render: h => h(PhotosPublic),
})
