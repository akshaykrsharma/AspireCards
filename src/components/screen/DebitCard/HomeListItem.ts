import Images from '../../../res/Images';
import Strings from '../../../res/Strings';

export default function HomeListItem() {
  return [
    {
      title: Strings.HomeListItems.topUp,
      description: Strings.HomeListItems.topUpDescription,
      image: Images.topup.source,
      showSwitch: false,
    },
    {
      title: Strings.HomeListItems.limit,
      description: Strings.HomeListItems.limitDescription,
      image: Images.limit.source,
      showSwitch: true,
    },
    {
      title: Strings.HomeListItems.freeze,
      description: Strings.HomeListItems.freezeDescription,
      image: Images.freeze.source,
      showSwitch: false,
    },
    {
      title: Strings.HomeListItems.newCard,
      description: Strings.HomeListItems.newCardDescription,
      image: Images.newcard.source,
      showSwitch: false,
    },
    {
      title: Strings.HomeListItems.deactivated,
      description: Strings.HomeListItems.deactivatedDescription,
      image: Images.deactive.source,
      showSwitch: false,
    },
  ];
}
