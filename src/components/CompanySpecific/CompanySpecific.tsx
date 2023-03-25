import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ChatIcon } from './ChatIcon';
import classes from './CompanySpecific.module.css';
import { HomeIcon } from './HomeIcon';
import { ProfileIcon } from './ProfileIcon';
import { Rectangle24Icon } from './Rectangle24Icon';
import { SearchIcon } from './SearchIcon';
import { UploadIcon } from './UploadIcon';
import { UploadIcon2 } from './UploadIcon2';

interface Props {
  className?: string;
}
/* @figmaId 69:2 */
export const CompanySpecific: FC<Props> = memo(function CompanySpecific(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.tabBar}>
        <div className={classes.background}>
          <div className={classes.background2}></div>
          <div className={classes.home}>
            <HomeIcon className={classes.icon} />
          </div>
          <div className={classes.search}>
            <SearchIcon className={classes.icon2} />
          </div>
          <div className={classes.upload}>
            <UploadIcon className={classes.icon3} />
          </div>
          <div className={classes.chat}>
            <ChatIcon className={classes.icon4} />
          </div>
          <div className={classes.profile}>
            <ProfileIcon className={classes.icon5} />
          </div>
        </div>
        <div className={classes.shape}></div>
      </div>
      <div className={classes.rectangle23}></div>
      <div className={classes.tripsAndTricks}>Trips and Tricks</div>
      <div className={classes.rectangle24}>
        <Rectangle24Icon className={classes.icon6} />
      </div>
      <div className={classes.rectangle25}></div>
      <div className={classes.rectangle26}></div>
      <div className={classes.rectangle27}></div>
      <div className={classes.line5}></div>
      <div className={classes.upload2}>
        <UploadIcon2 className={classes.icon7} />
      </div>
    </div>
  );
});
