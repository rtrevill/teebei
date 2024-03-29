import { gql } from "@apollo/client";

export const MUTATION_LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        firstName
        lastName
        userName
        id
      }
    }
  }
`;

export const MUTATION_ADDUSER = gql`
  mutation AddUser($input: UserInput!) {
    addUser(input: $input) {
      token
      user {
        id
        firstName
        lastName
        email
        password
        dateOfBirth
      }
    }
  }
`;

export const MUTATION_DELETEUSER = gql`
  mutation deleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
      id
      userName
    }
  }
`;

export const MUTATION_SENDREQUEST = gql`
  mutation sendFriendRequest($fromUserId: ID!, $toUserId: ID!) {
    sendFriendRequest(fromUserId: $fromUserId, toUserId: $toUserId) {
      userName
      sentFriendRequests {
        userName
        firstName
        lastName
      }
    }
  }
`;

export const MUTATION_ACCEPTREQUEST = gql`
  mutation acceptFriendRequest($fromUserId: ID!, $toUserId: ID!) {
    acceptFriendRequest(fromUserId: $fromUserId, toUserId: $toUserId) {
      id
      userName
      firstName
      friends {
        id
        userName
        firstName
      }
    }
  }
`;

export const MUTATION_REJECTREQUEST = gql`
  mutation rejectFriendRequest($fromUserId: ID!, $toUserId: ID!) {
    rejectFriendRequest(fromUserId: $fromUserId, toUserId: $toUserId) {
      id
      userName
      firstName
      pendingFriendRequests {
        id
        userName
      }
    }
  }
`;

export const ACCEPT_FRIEND_REQUEST = gql`
  mutation AcceptFriendRequest($fromUserId: ID!, $toUserId: ID!) {
    acceptFriendRequest(fromUserId: $fromUserId, toUserId: $toUserId) {
      id
      userName
      firstName
      lastName
      friends {
        id
        userName
        firstName
        lastName
      }
      pendingFriendRequests {
        id
        userName
        firstName
        lastName
      }
    }
  }
`;

export const REJECT_FRIEND_REQUEST = gql`
  mutation RejectFriendRequest($fromUserId: ID!, $toUserId: ID!) {
    rejectFriendRequest(fromUserId: $fromUserId, toUserId: $toUserId) {
      id
      userName
      firstName
      lastName
      friends {
        id
        userName
        firstName
        lastName
      }
      pendingFriendRequests {
        id
        userName
        firstName
        lastName
      }
    }
  }
`;

export const SEND_FRIEND_REQUEST = gql`
  mutation SendFriendRequest($fromUserId: ID!, $toUserId: ID!) {
    sendFriendRequest(fromUserId: $fromUserId, toUserId: $toUserId) {
      id
      userName
      firstName
      lastName
      sentFriendRequests {
        id
        userName
        firstName
        lastName
      }
    }
  }
`;

export const ADD_TV_RECOMMENDATION = gql`
  mutation addTVRecommend($input: TVInput!) {
    addTVRecommend(input: $input) {
      id
      userName
      recommendations {
        id
        type
        ... on Movie {
          tmdbID
          original_title
          overview
          poster_path
          AU_platforms
        }
        ... on TV {
          tmdbID
          original_name
          overview
          poster_path
          AU_platforms
        }
      }
    }
  }
`;

export const ADD_MOVIE_RECOMMENDATION = gql`
  mutation AddMovieRecommend($input: MovieInput!) {
    addMovieRecommend(input: $input) {
      userName
      id
      recommendations {
        id
        type
        ... on Movie {
          original_title
          tmdbID
          overview
          poster_path
          AU_platforms
        }
        ... on TV {
          original_name
          tmdbID
          overview
          poster_path
          type
          AU_platforms
        }
      }
    }
  }
`;

export const ADD_MOVIE_WATCHLIST = gql`
  mutation addMovieToWatch($input: MovieInput!) {
    addMovieToWatch(input: $input) {
      userName
      watchList {
        id
        type
        ... on Movie {
          original_title
          overview
          poster_path
          release_date
          tmdbID
          AU_platforms
        }
        ... on TV {
          original_name
          overview
          poster_path
          first_air_date
          AU_platforms
          tmdbID
        }
      }
    }
  }
`;

export const ADD_TV_WATCHLIST = gql`
  mutation addTVToWatch($input: TVInput!) {
    addTVToWatch(input: $input) {
      userName
      watchList {
        id
        type
        ... on Movie {
          original_title
          overview
          poster_path
          release_date
          tmdbID
          AU_platforms
        }
        ... on TV {
          original_name
          overview
          poster_path
          first_air_date
          AU_platforms
          tmdbID
        }
      }
    }
  }
`;
