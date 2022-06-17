import { gql } from "@apollo/client";

export const GET_PAST_LAUNCHES = gql`
  {
    launchesPast(limit: 50) {
      mission_name
      links {
        flickr_images
      }
      rocket {
        rocket_name
        rocket_type
        rocket {
          id
        }
      }
      launch_date_local
    }
  }
`;

export const GET_ROCKET_INFO = gql`
  query GET_ROCKET_INFO($rocketId: ID!, $rocketImgId: String!) {
    rocket(id: $rocketId) {
      height {
        meters
      }
      diameter {
        meters
      }
      mass {
        kg
      }
      name
      success_rate_pct
      first_flight
      cost_per_launch
      description
    }
    launchesPast(limit: 10, find: { rocket_id: $rocketImgId }) {
      links {
        flickr_images
      }
    }
  }
`;
