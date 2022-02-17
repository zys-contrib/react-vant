import { remove } from 'fs-extra';
import { PROJECT_DIST, SITE_DIST_DIR } from '../common/constant.js';

export async function clean() {
  await Promise.all([remove(PROJECT_DIST), remove(SITE_DIST_DIR)]);
}
