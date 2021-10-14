export {}

interface HomePage{
    header: Header;
    carsSlider: CarsSlider;
    ourServices: OurServices;
    trustworthyCarRental: TrustworthyCarRental;
    clientsSlider: ClientsSlider;
    faq: FAQ;
    ourTravelExperts: OurTravelExperts;
    footer: Footer;
    buttons: Array<Button>;
}

interface Header {
    menuOptions: MenuOptions;
    lenguage: Lenguages;
    logoPath: string;
}

interface MenuOptions {
    displayname: string;
    path?: string;
    children?: Array<MenuOptionChild>;
}

interface MenuOptionChild {
    displayname: string;
    path: string;
}

interface Lenguages {
    displayname: string;
    code: string;
}

interface CarsSlider {
    tripAdvisor: TripAdvisor;
    carSliderInfo: Array<CarSliderInfo>
}

interface CarSliderInfo {
    title: string;
    description: string;
    imagePath: string;
    rating: CarRating;
    hasTripAdvisor: boolean;
}

interface CarRating {
    rate: number;
    profileImagePath: string;
    comment: string;
    name: string;
}

interface TripAdvisor {
    tripAdvisorLogoPath: string;
    content: string;
}

interface OurServices{
    title: string;
    services: Array<Service>;
}

interface Service{
    imagePath: string;
    title: string;
    description: string;
}

interface TrustworthyCarRental{
    title: string;
    cardsInfo: Array<TrustworthyCarRentalInfo>;
}

interface TrustworthyCarRentalInfo{
    imagePath: string;
    title: string;
    shortDescription: string;
    longDescription: string;
}

interface ClientsSlider{
    title: string;
    clientsOpinions: Array<ClientOpinion>;
}

interface ClientOpinion{
    profileImagePath: string;
    comment: string;
    name: string;
    rate: number;
}

interface FAQ {
    title: string;
    description: string;
    faqOptions: Array<FAQOption>;
}

interface FAQOption {
    title: string;
    description: string;
}

interface OurTravelExperts {
    title: string;
    infoSections: Array<OurTravelExpertsInfo>;
    teamImagePath: string;
}

interface OurTravelExpertsInfo {
    imagePath: string;
    description: string;
}

interface Footer{
    text: string;
}

interface Button{
    type: string;
    text: string;
}