/**
 * Nextcloud - Replicate
 *
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Julien Veyssier <eneiluj@posteo.net>
 * @copyright Julien Veyssier 2022
 */

import Vue from 'vue'
import './bootstrap.js'
import ImagePredictionPage from './views/ImagePredictionPage.vue'

const View = Vue.extend(ImagePredictionPage)
new View().$mount('#content')
