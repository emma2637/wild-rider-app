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
                      alternativeText
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
                        alternativeText
                      }
                      hastripadvisor
                      carratings {
                        rate
                        profileimagepath {
                          url
                          width
                          height
                          alternativeText
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
                        alternativeText
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
                        alternativeText
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
                        alternativeText
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
                        alternativeText
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
                      alternativeText
                    }
                    otexpertsinfos{
                      imagepath {
                        url
                        width
                        height
                        alternativeText
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


