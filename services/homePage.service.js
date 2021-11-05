import { ApolloClient, InMemoryCache, gql, } from '@apollo/client';
// import  detectBrowserLanguage  from 'detect-browser-language';
const apiDefaultUrl = 'https://wild-rider-strapi.herokuapp.com/graphql';

export const client = new ApolloClient({
  uri: apiDefaultUrl,
  cache: new InMemoryCache()
});
export async function queryClient(language) {

  return await client.query({
    query: gql`
            query {
                homepages(locale: "${language}") {
                  headers{
                    menuoptions{
                      displayname
                      menuoptionchilds{
                        displayname
                        path
                      }
                    }
                    languages {
                      displayname
                      code
                    }
                    logopath {
                      url
                      width
                      height
                    }
                  }
                  carssliders{
                    carsliderinfos{
                      title
                      description
                      imagepath{
                        url
                        width
                        height
                      }
                      hastripadvisor
                      ismobile
                      istablet
                      carratings {
                        rate
                        profileimagepath {
                          url
                          width
                          height
                        }
                        comment
                        name
                      }
                    }
                    tripadvisors{
                      tripadvisorlogopath {
                        url
                        width
                        height
                      }
                      content
                      url
                    }
                  }
                  ourservices {
                  title
                    services{
                      imagepath{
                        url
                        width
                        height
                      }
                      title
                      description
                    }
                  }      
                  thustworthycarrentals{
                    title
                    Shorttitle
                    thrustworthycarrentalinfos{
                      imagepath{
                        url
                        width
                        height
                      }
                      title
                      shortdescription
                      longdescription
                    }
                  }
                  clientsliders{
                    title
                    clientopinions{
                      profileimagepath {
                        url
                        width
                        height
                      }
                      comment
                      name
                      rate
                    }      
                  }
                  faqs{
                    title
                    description
                    faqoptions{
                      title
                      description
                    }
                  }
                  otexperts{
                    title
                    teamimagepath{
                      url
                      width
                      height
                    }
                    otexpertsinfos{
                      imagepath {
                        url
                        width
                        height
                      }
                      description
                    }
                  }
                  footers{
                    text
                  }
                  buttons{
                    type
                    text
                  }
                  }    
            }
        `
  });
}

export default client;