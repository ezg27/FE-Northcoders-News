// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import {
  faArrowAltCircleUp as faArrowAltCircleUpSolid,
  faArrowAltCircleDown as faArrowAltCircleDownSolid} from '@fortawesome/free-solid-svg-icons';
import {
  faArrowAltCircleUp as faArrowAltCircleUpRegular,
  faArrowAltCircleDown as faArrowAltCircleDownRegular} from '@fortawesome/free-regular-svg-icons';

library.add(
  faArrowAltCircleUpSolid,
  faArrowAltCircleDownSolid,
  faArrowAltCircleUpRegular,
  faArrowAltCircleDownRegular
  // more icons go here
);
