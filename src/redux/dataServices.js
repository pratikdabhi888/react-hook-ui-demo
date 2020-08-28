import {
  fetchArticlesSuccess,
  fetchUsersSuccess
} from './dataActions';

/**
 * get userlist api
 * @returns {function(...[*]=)}
 */
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersSuccess(users))
  }
}

/**
 * get articles api
 * @returns {function(...[*]=)}
 */
export const fetchArticles = () => {
  return (dispatch) => {
    dispatch(fetchArticlesSuccess(articles))
  }
}

const users = [
  {
    name: 'Pratik Dabhi',
    age: 30,
    birthdate: '12/12/1988',
    profilePicture: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
  },
  {
    name: 'Jay Patel',
    age: 28,
    birthdate: '1/2/1994',
    profilePicture: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
  },
  {
    name: 'Hiren Patel',
    age: 24,
    birthdate: '10/11/1986',
    profilePicture: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
  },
  {
    name: 'Rutvik Roshan',
    age: 40,
    birthdate: '21/09/1980',
    profilePicture: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
  },
  {
    name: 'Sunant Singh',
    age: 38,
    birthdate: '23/08/1982',
    profilePicture: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
  },
  {
    name: 'Riya Chakrwati',
    age: 35,
    birthdate: '08/09/1984',
    profilePicture: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  },
  {
    name: 'Narendra Modi',
    age: 60,
    birthdate: '03/08/1960',
    profilePicture: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
  },
]

const articles = [
  {
    title : 'React v17.0 Release Candidate: No New Features',
    description: 'React 17 enables gradual React upgrades. When you upgrade from React 15 to 16 (or, soon, from React 16 to 17), you would usually upgrade your whole app at once. This works well for many apps. But it can get increasingly challenging if the codebase was written more than a few years ago and isn’t actively maintained. And while it’s possible to use two versions of React on the page, until React 17 this has been fragile and caused problems with events.\n' +
      '\n' +
      'We’re fixing many of those problems with React 17. This means that when React 18 and the next future versions come out, you will now have more options. The first option will be to upgrade your whole app at once, like you might have done before. But you will also have an option to upgrade your app piece by piece. For example, you might decide to migrate most of your app to React 18, but keep some lazy-loaded dialog or a subroute on React 17.\n' +
      '\n' +
      'This doesn’t mean you have to do gradual upgrades. For most apps, upgrading all at once is still the best solution. Loading two versions of React — even if one of them is loaded lazily on demand — is still not ideal. However, for larger apps that aren’t actively maintained, this option may make sense to consider, and React 17 enables those apps to not get left behind.\n' +
      '\n' +
      'To enable gradual updates, we’ve needed to make some changes to the React event system. React 17 is a major release because these changes are potentially breaking. In practice, we’ve only had to change fewer than twenty components out of 100,000+ so we expect that most apps can upgrade to React 17 without too much trouble. Tell us if you run into problems.\n' +
      '\n',
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
    author: 'Pratik Dabhi'
  },
  {
    title : 'Building Great User Experiences with Concurrent Mode and Suspense',
    description: 'React 17 enables gradual React upgrades. When you upgrade from React 15 to 16 (or, soon, from React 16 to 17), you would usually upgrade your whole app at once. This works well for many apps. But it can get increasingly challenging if the codebase was written more than a few years ago and isn’t actively maintained. And while it’s possible to use two versions of React on the page, until React 17 this has been fragile and caused problems with events.\n' +
      '\n' +
      'We’re fixing many of those problems with React 17. This means that when React 18 and the next future versions come out, you will now have more options. The first option will be to upgrade your whole app at once, like you might have done before. But you will also have an option to upgrade your app piece by piece. For example, you might decide to migrate most of your app to React 18, but keep some lazy-loaded dialog or a subroute on React 17.\n' +
      '\n' +
      'This doesn’t mean you have to do gradual upgrades. For most apps, upgrading all at once is still the best solution. Loading two versions of React — even if one of them is loaded lazily on demand — is still not ideal. However, for larger apps that aren’t actively maintained, this option may make sense to consider, and React 17 enables those apps to not get left behind.\n' +
      '\n' +
      'To enable gradual updates, we’ve needed to make some changes to the React event system. React 17 is a major release because these changes are potentially breaking. In practice, we’ve only had to change fewer than twenty components out of 100,000+ so we expect that most apps can upgrade to React 17 without too much trouble. Tell us if you run into problems.\n' +
      '\n',
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg",
    author: 'Susant singh'
  },
  {
    title : 'Preparing for the Future with React Prereleases',
    description: 'React 17 enables gradual React upgrades. When you upgrade from React 15 to 16 (or, soon, from React 16 to 17), you would usually upgrade your whole app at once. This works well for many apps. But it can get increasingly challenging if the codebase was written more than a few years ago and isn’t actively maintained. And while it’s possible to use two versions of React on the page, until React 17 this has been fragile and caused problems with events.\n' +
      '\n' +
      'We’re fixing many of those problems with React 17. This means that when React 18 and the next future versions come out, you will now have more options. The first option will be to upgrade your whole app at once, like you might have done before. But you will also have an option to upgrade your app piece by piece. For example, you might decide to migrate most of your app to React 18, but keep some lazy-loaded dialog or a subroute on React 17.\n' +
      '\n' +
      'This doesn’t mean you have to do gradual upgrades. For most apps, upgrading all at once is still the best solution. Loading two versions of React — even if one of them is loaded lazily on demand — is still not ideal. However, for larger apps that aren’t actively maintained, this option may make sense to consider, and React 17 enables those apps to not get left behind.\n' +
      '\n' +
      'To enable gradual updates, we’ve needed to make some changes to the React event system. React 17 is a major release because these changes are potentially breaking. In practice, we’ve only had to change fewer than twenty components out of 100,000+ so we expect that most apps can upgrade to React 17 without too much trouble. Tell us if you run into problems.\n' +
      '\n',
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
    author: 'Narendra Modi'
  }
]
