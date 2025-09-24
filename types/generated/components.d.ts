import type { Schema, Struct } from '@strapi/strapi';

export interface CmComponentsAbout extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    descriptionh2: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    listeBullets: Schema.Attribute.Component<'cm-components.listebullet', true>;
  };
}

export interface CmComponentsAboutCentre extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_about_centres';
  info: {
    displayName: 'about_centre';
  };
  attributes: {
    description_h2: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CmComponentsAppel extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_appels';
  info: {
    displayName: 'appel';
  };
  attributes: {
    accroche: Schema.Attribute.String;
    debut: Schema.Attribute.Time;
    fin: Schema.Attribute.Time;
    numero: Schema.Attribute.String;
  };
}

export interface CmComponentsArticles extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_articles';
  info: {
    displayName: 'articles';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::cm-page.cm-page'>;
    readTime: Schema.Attribute.Time;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsArticlesSimilaires extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_articles_similaires';
  info: {
    displayName: 'articles-similaires';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsBottomFooter extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_bottom_footers';
  info: {
    displayName: 'bottom-footer';
  };
  attributes: {
    category: Schema.Attribute.Component<'cm-components.sub-spe', true>;
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CmComponentsCarousel extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_carousels';
  info: {
    displayName: 'carousel';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsCatEntete extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_cat_entetes';
  info: {
    displayName: 'cat-entete';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h1: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pointCles: Schema.Attribute.Component<'cm-components.key-points', true>;
  };
}

export interface CmComponentsCategory extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_categories';
  info: {
    displayName: 'category';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    color: Schema.Attribute.String;
    subCategories: Schema.Attribute.Component<
      'cm-components.sub-categories',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsCentresCm extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_centres_cms';
  info: {
    displayName: 'centres-cm';
  };
  attributes: {
    accroche: Schema.Attribute.String;
    cm_page: Schema.Attribute.Relation<'oneToOne', 'api::cm-page.cm-page'>;
    titre: Schema.Attribute.String;
  };
}

export interface CmComponentsCourses extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_courses';
  info: {
    displayName: 'courses';
  };
  attributes: {
    cm_page: Schema.Attribute.Relation<'oneToOne', 'api::cm-page.cm-page'>;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsDescriptionH2 extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_description_h2s';
  info: {
    displayName: 'description h2';
  };
  attributes: {};
}

export interface CmComponentsEmail extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_emails';
  info: {
    displayName: 'email';
  };
  attributes: {
    email: Schema.Attribute.String;
    field: Schema.Attribute.String;
  };
}

export interface CmComponentsEntete extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_entetes';
  info: {
    displayName: 'entete';
  };
  attributes: {
    description_h1: Schema.Attribute.Text;
    h1: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CmComponentsEvents extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_events';
  info: {
    displayName: 'events';
  };
  attributes: {
    date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    location: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsFaq extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    descriptionh3: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    h3: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    listefaq: Schema.Attribute.Component<'cm-components.faq-items', true>;
  };
}

export interface CmComponentsFaqItems extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_faq_items';
  info: {
    displayName: 'faq-items';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface CmComponentsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    points: Schema.Attribute.Component<'cm-components.points', true>;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsFormulaire extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_formulaires';
  info: {
    displayName: 'formulaire';
  };
  attributes: {
    formulaire_clients: Schema.Attribute.Relation<
      'oneToMany',
      'api::formulaire-client.formulaire-client'
    >;
  };
}

export interface CmComponentsJoinus extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_joinuses';
  info: {
    displayName: 'joinus';
  };
  attributes: {
    descriptionh2: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
  };
}

export interface CmComponentsKeyPoints extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_key_points';
  info: {
    displayName: 'key-points';
  };
  attributes: {
    listePoints: Schema.Attribute.Component<'cm-components.liste-points', true>;
  };
}

export interface CmComponentsKeyResponsibilities
  extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_key_responsibilities';
  info: {
    displayName: 'KeyResponsibilities';
  };
  attributes: {
    detail: Schema.Attribute.Component<
      'cm-components.sous-responsabilite',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsListe extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_listes';
  info: {
    displayName: 'liste';
  };
  attributes: {
    locations: Schema.Attribute.Component<'cm-components.raw-locations', true>;
  };
}

export interface CmComponentsListeAgences extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_liste_agences';
  info: {
    displayName: 'listeAgences';
  };
  attributes: {
    description_h2: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    liste: Schema.Attribute.Component<'cm-components.liste', false>;
  };
}

export interface CmComponentsListeOffresProf extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_liste_offres_profs';
  info: {
    displayName: 'liste-offres-prof';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description_poste: Schema.Attribute.Text;
    titre_poste: Schema.Attribute.String;
  };
}

export interface CmComponentsListePoints extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_liste_points';
  info: {
    displayName: 'listePoints';
  };
  attributes: {
    description: Schema.Attribute.Text;
    item: Schema.Attribute.String;
  };
}

export interface CmComponentsListePostes extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_liste_postes';
  info: {
    displayName: 'listePostes';
  };
  attributes: {};
}

export interface CmComponentsListeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_liste_testimonials';
  info: {
    displayName: 'listeTestimonials';
  };
  attributes: {
    description_h2: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<
      'cm-components.testimonials',
      true
    >;
  };
}

export interface CmComponentsListebullet extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_listebullets';
  info: {
    displayName: 'listebullet';
  };
  attributes: {
    bulletpoint: Schema.Attribute.String;
  };
}

export interface CmComponentsMainNavLink extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_main_nav_links';
  info: {
    displayName: 'main-nav-link';
  };
  attributes: {
    category: Schema.Attribute.Component<'cm-components.category', true>;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsNosPartenaires extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_nos_partenaires';
  info: {
    displayName: 'nos_partenaires';
  };
  attributes: {
    description_h2: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    partners: Schema.Attribute.Component<'cm-components.partners', true>;
  };
}

export interface CmComponentsOffresEmploi extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_offres_emplois';
  info: {
    displayName: 'offres-emploi';
  };
  attributes: {
    description_h2: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
  };
}

export interface CmComponentsOffresProfs extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_offres_profs';
  info: {
    displayName: 'offresProfs';
  };
  attributes: {
    description_h2: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    listeOffres: Schema.Attribute.Component<
      'cm-components.liste-offres-prof',
      true
    >;
  };
}

export interface CmComponentsPageSpe extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_page_spes';
  info: {
    displayName: 'page-spe';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsPartners extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_partners';
  info: {
    displayName: 'partners';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface CmComponentsPkRejoindre extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_pk_rejoindres';
  info: {
    displayName: 'pk-rejoindre';
  };
  attributes: {
    description_h2: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
  };
}

export interface CmComponentsPoints extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_points';
  info: {
    displayName: 'points';
  };
  attributes: {
    descriptionpoint: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<
      [
        'book',
        'graduation_cap',
        'chalkboard',
        'pencil',
        'lightbulb',
        'certificate',
        'medal',
        'users',
        'user',
        'handshake',
        'support',
        'calendar',
        'clock',
        'globe',
        'language',
        'child',
        'library',
        'school',
        'microscope',
        'calculator',
      ]
    >;
    iconBgClass: Schema.Attribute.Enumeration<
      [
        'blue',
        'green',
        'yellow',
        'orange',
        'red',
        'purple',
        'teal',
        'pink',
        'indigo',
        'cyan',
        'gray',
        'black',
        'white',
      ]
    >;
    titrepoint: Schema.Attribute.String;
  };
}

export interface CmComponentsRawLocations extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_raw_locations';
  info: {
    displayName: 'raw-locations';
  };
  attributes: {
    address: Schema.Attribute.String;
    mapUrl: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    note: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface CmComponentsReseauPartenaires extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_reseau_partenaires';
  info: {
    displayName: 'reseau_Partenaires';
  };
  attributes: {
    description_h2: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CmComponentsResponsabilite extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_responsabilites';
  info: {
    displayName: 'responsabilite';
  };
  attributes: {
    detailmission: Schema.Attribute.Component<
      'cm-components.sous-responsabilite',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsSecondaryLink extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_secondary_links';
  info: {
    displayName: 'secondary-link';
  };
  attributes: {
    pages: Schema.Attribute.Relation<'oneToOne', 'api::cm-page.cm-page'>;
    text: Schema.Attribute.String;
  };
}

export interface CmComponentsSectionAbout extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_section_abouts';
  info: {
    displayName: 'section-about';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
  };
}

export interface CmComponentsSectionArticles extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_section_articles';
  info: {
    displayName: 'section-articles';
  };
  attributes: {
    articles: Schema.Attribute.Component<'cm-components.courses', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsSectionCarousel extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_section_carousels';
  info: {
    displayName: 'section-carousel';
  };
  attributes: {
    carousel: Schema.Attribute.Component<'cm-components.carousel', true>;
  };
}

export interface CmComponentsSectionEvents extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_section_events';
  info: {
    displayName: 'section-events';
  };
  attributes: {
    description: Schema.Attribute.Text;
    events: Schema.Attribute.Component<'cm-components.events', true>;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsSectionFaqItems extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_section_faq_items';
  info: {
    displayName: 'section-faq-items';
  };
  attributes: {
    descriptionh3: Schema.Attribute.Text;
    faq: Schema.Attribute.Component<'cm-components.faq-items', true>;
    h3: Schema.Attribute.String;
    imagefaq: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsSectionFeatures extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_section_features';
  info: {
    displayName: 'section-features';
  };
  attributes: {
    feature: Schema.Attribute.Component<'cm-components.features', true>;
    h2: Schema.Attribute.String;
  };
}

export interface CmComponentsSectionImage extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_section_images';
  info: {
    displayName: 'section-image';
  };
  attributes: {
    codecouleur: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pages: Schema.Attribute.Component<'cm-components.courses', true>;
  };
}

export interface CmComponentsSectionKey extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_section_keys';
  info: {
    displayName: 'section-key';
  };
  attributes: {
    h2: Schema.Attribute.String;
  };
}

export interface CmComponentsSectionPartners extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_section_partners';
  info: {
    displayName: 'section-partners';
  };
  attributes: {
    description: Schema.Attribute.Text;
    partners: Schema.Attribute.Component<'cm-components.partners', true>;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsSectionServices extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_section_services';
  info: {
    displayName: 'section-services';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    service: Schema.Attribute.Component<'cm-components.service', true>;
  };
}

export interface CmComponentsSectionSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_section_social_links';
  info: {
    displayName: 'section-social-links';
  };
  attributes: {
    description: Schema.Attribute.Text;
    email: Schema.Attribute.Component<'cm-components.email', true>;
    socialLink: Schema.Attribute.Component<'cm-components.social-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsSectionStats extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_section_stats';
  info: {
    displayName: 'section-stats';
  };
  attributes: {
    chiffres: Schema.Attribute.Component<'cm-components.liste-points', true>;
    descriptionh3: Schema.Attribute.Text;
    h3: Schema.Attribute.String;
  };
}

export interface CmComponentsSectionTestimonials
  extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_section_testimonials';
  info: {
    displayName: 'section-testimonials';
  };
  attributes: {
    description: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<
      'cm-components.testimonials',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsService extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_services';
  info: {
    displayName: 'service';
  };
  attributes: {
    cm_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::category.category'
    >;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsSocial extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_socials';
  info: {
    displayName: 'social';
  };
  attributes: {
    description_h2: Schema.Attribute.Text;
    emailField: Schema.Attribute.String;
    emailValue: Schema.Attribute.String;
    h2: Schema.Attribute.String;
    socialLink: Schema.Attribute.Component<'cm-components.social-link', true>;
  };
}

export interface CmComponentsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_social_links';
  info: {
    displayName: 'social-link';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'facebook',
        'instagram',
        'linkedin',
        'twitter',
        'youtube',
        'tiktok',
        'snapchat',
        'whatsapp',
        'pinterest',
        'github',
        'dribbble',
        'behance',
        'telegram',
        'discord',
      ]
    >;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface CmComponentsSousResponsabilite extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_sous_responsabilites';
  info: {
    displayName: 'sous-responsabilite';
  };
  attributes: {
    mission: Schema.Attribute.String;
  };
}

export interface CmComponentsSousResponsabilite2
  extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_sous_responsabilite2s';
  info: {
    displayName: 'sous-responsabilite2';
  };
  attributes: {
    detailresponsabilite: Schema.Attribute.String;
  };
}

export interface CmComponentsSousresponsabilite2
  extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_sousresponsabilite2s';
  info: {
    displayName: 'sousresponsabilite2';
  };
  attributes: {
    detailresponsabilite: Schema.Attribute.String;
  };
}

export interface CmComponentsSubCategories extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_sub_categories';
  info: {
    displayName: 'sub-categories';
  };
  attributes: {
    pages: Schema.Attribute.Component<'cm-components.courses', true>;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsSubSpe extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_sub_spes';
  info: {
    displayName: 'sub-spe';
  };
  attributes: {
    pages: Schema.Attribute.Component<'cm-components.page-spe', true>;
    title: Schema.Attribute.String;
  };
}

export interface CmComponentsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 3;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    role: Schema.Attribute.String;
  };
}

export interface CmComponentsTopFooter extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_top_footers';
  info: {
    displayName: 'top-footer';
  };
  attributes: {
    category: Schema.Attribute.Component<'cm-components.sub-categories', true>;
  };
}

export interface CmComponentsTopHeader extends Struct.ComponentSchema {
  collectionName: 'components_cm_components_top_headers';
  info: {
    displayName: 'top-header';
  };
  attributes: {
    appelheader: Schema.Attribute.Component<'cm-components.appel', false>;
    centrecm: Schema.Attribute.Component<'cm-components.centres-cm', false>;
  };
}

export interface SharedBulletPoint extends Struct.ComponentSchema {
  collectionName: 'components_shared_bullet_points';
  info: {
    displayName: 'bulletPoint';
  };
  attributes: {
    h2: Schema.Attribute.String;
    listeBullets: Schema.Attribute.Component<'cm-components.listebullet', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cm-components.about': CmComponentsAbout;
      'cm-components.about-centre': CmComponentsAboutCentre;
      'cm-components.appel': CmComponentsAppel;
      'cm-components.articles': CmComponentsArticles;
      'cm-components.articles-similaires': CmComponentsArticlesSimilaires;
      'cm-components.bottom-footer': CmComponentsBottomFooter;
      'cm-components.carousel': CmComponentsCarousel;
      'cm-components.cat-entete': CmComponentsCatEntete;
      'cm-components.category': CmComponentsCategory;
      'cm-components.centres-cm': CmComponentsCentresCm;
      'cm-components.courses': CmComponentsCourses;
      'cm-components.description-h2': CmComponentsDescriptionH2;
      'cm-components.email': CmComponentsEmail;
      'cm-components.entete': CmComponentsEntete;
      'cm-components.events': CmComponentsEvents;
      'cm-components.faq': CmComponentsFaq;
      'cm-components.faq-items': CmComponentsFaqItems;
      'cm-components.features': CmComponentsFeatures;
      'cm-components.formulaire': CmComponentsFormulaire;
      'cm-components.joinus': CmComponentsJoinus;
      'cm-components.key-points': CmComponentsKeyPoints;
      'cm-components.key-responsibilities': CmComponentsKeyResponsibilities;
      'cm-components.liste': CmComponentsListe;
      'cm-components.liste-agences': CmComponentsListeAgences;
      'cm-components.liste-offres-prof': CmComponentsListeOffresProf;
      'cm-components.liste-points': CmComponentsListePoints;
      'cm-components.liste-postes': CmComponentsListePostes;
      'cm-components.liste-testimonials': CmComponentsListeTestimonials;
      'cm-components.listebullet': CmComponentsListebullet;
      'cm-components.main-nav-link': CmComponentsMainNavLink;
      'cm-components.nos-partenaires': CmComponentsNosPartenaires;
      'cm-components.offres-emploi': CmComponentsOffresEmploi;
      'cm-components.offres-profs': CmComponentsOffresProfs;
      'cm-components.page-spe': CmComponentsPageSpe;
      'cm-components.partners': CmComponentsPartners;
      'cm-components.pk-rejoindre': CmComponentsPkRejoindre;
      'cm-components.points': CmComponentsPoints;
      'cm-components.raw-locations': CmComponentsRawLocations;
      'cm-components.reseau-partenaires': CmComponentsReseauPartenaires;
      'cm-components.responsabilite': CmComponentsResponsabilite;
      'cm-components.secondary-link': CmComponentsSecondaryLink;
      'cm-components.section-about': CmComponentsSectionAbout;
      'cm-components.section-articles': CmComponentsSectionArticles;
      'cm-components.section-carousel': CmComponentsSectionCarousel;
      'cm-components.section-events': CmComponentsSectionEvents;
      'cm-components.section-faq-items': CmComponentsSectionFaqItems;
      'cm-components.section-features': CmComponentsSectionFeatures;
      'cm-components.section-image': CmComponentsSectionImage;
      'cm-components.section-key': CmComponentsSectionKey;
      'cm-components.section-partners': CmComponentsSectionPartners;
      'cm-components.section-services': CmComponentsSectionServices;
      'cm-components.section-social-links': CmComponentsSectionSocialLinks;
      'cm-components.section-stats': CmComponentsSectionStats;
      'cm-components.section-testimonials': CmComponentsSectionTestimonials;
      'cm-components.service': CmComponentsService;
      'cm-components.social': CmComponentsSocial;
      'cm-components.social-link': CmComponentsSocialLink;
      'cm-components.sous-responsabilite': CmComponentsSousResponsabilite;
      'cm-components.sous-responsabilite2': CmComponentsSousResponsabilite2;
      'cm-components.sousresponsabilite2': CmComponentsSousresponsabilite2;
      'cm-components.sub-categories': CmComponentsSubCategories;
      'cm-components.sub-spe': CmComponentsSubSpe;
      'cm-components.testimonials': CmComponentsTestimonials;
      'cm-components.top-footer': CmComponentsTopFooter;
      'cm-components.top-header': CmComponentsTopHeader;
      'shared.bullet-point': SharedBulletPoint;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
