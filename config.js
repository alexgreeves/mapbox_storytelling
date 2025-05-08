var config = {
    style: 'mapbox://styles/alexgreeves/cmacugo4j008z01s88uo34zeh',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYWxleGdyZWV2ZXMiLCJhIjoiY205OG9mODU5MDUyaTJpb280cDg2MWU4OSJ9.MbrOuSTZZwr76I4T6yoyig',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Final Project',
    subtitle: 'Spatial Journeys across the South',
    byline: 'Alex Greeves and Danny Lyman',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'Introduction',
            image: './assets/color_purple_cover.jpg',
            description: 'This is where I insert a description of our project',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple - Description',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Alice Walker’s The Color Purple tells the story of Celie, a Black woman in early 20th-century Georgia, whose journey from silence and oppression to independence and self-worth is closely tied to the spaces she lives in and eventually escapes. At the start of the novel, Celie is confined within abusive domestic environments that limit her voice and autonomy. Over time, however, her physical movement, first emotionally through her letters and later, literally, as she leaves her husband’s home, reflects her growing sense of agency. Her eventual ownership of a home and business marks a powerful shift from confinement to control. Unlike other female protagonists who find freedom through wandering, Celie’s journey shows that reclaiming one’s space can be just as empowering as leaving it. Her transformation illustrates how physical and emotional movement work together to reshape her identity and give her the power to define her own life. -Danny Lyman.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple - Movement',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Description of the second location.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple - Analysis',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Description of the second location.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes Were Watching God - Description',
            image: './assets/alice_walker_childhood_home.jpg',
            description: ' Zora Neale Hurston’s Their Eyes Were Watching God stands as following the life of Janie Crawford, a Black woman in early 20th-century Florida whose personal growth is deeply tied to her movement across physical landscapes. From her grandmother’s rural home in West Florida, to Eatonville, and finally to the Everglades and back, Janie’s journey reflects a gradual assertion of autonomy in the face of restrictive gender and racial norms. Each location signals a different stage in her evolving sense of self: the imposition of duty, the stifling expectations of marriage, and finally, the pursuit of emotional fulfillment. Hurston captures this progression with vivid attention to Southern geography, embedding Janie’s transformation in specific regional and cultural settings. As Janie affirms upon her return to Eatonville, “Ah done been tuh de horizon and back and now Ah kin set heah in mah house and live by comparisons” (p. 191), articulating that she has been shaped not only by experience but also by the places through which she has traveled. -Alex Greeves',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes Were Watching God - Movement',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'The physical movements in Janie’s life correspond closely with shifts in her personal agency and relationship dynamics. Her early life in West Florida is defined by her grandmother’s protective control, culminating in a forced marriage to Logan Killicks that prioritizes security over love. Janie’s decision to leave Logan for Joe Starks leads her to Eatonville, where she becomes the mayor’s wife and gains visibility but loses autonomy. Her voice is suppressed even as her social status rises. It is not until her third move, south to the Everglades with Tea Cake, that Janie experiences greater relational and spatial freedom. Living among migrant laborers and sharing in physical labor, she finds companionship that approaches the idealized love she once imagined. However, the freedom of this space is uncertain, as symbolized by the hurricane that displaces their lives. Janie’s final return to Eatonville, now on her own terms, signals a reentry into society as an independent woman. Each stage of her journey is marked by a growing capacity to define love and selfhood outside of societal expectations. -Alex Greeves',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes Were Watching God - Analysis',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Janie’s geographic journey functions as a metaphor for her growing sense of agency and identity. Initially, her movements are reactive—decisions made for her by others, such as her grandmother or Joe Starks. These early transitions underscore Janie’s lack of control over her life and body. However, with her move to the Everglades, Janie begins to make choices for herself, engaging in a life that, while physically demanding, offers emotional depth and reciprocity. Her relationship with Tea Cake, despite its flaws, allows her to explore love on terms closer to her own. Even the trauma of the hurricane serves to make clear her sense of self. By the time she returns to Eatonville, Janie is no longer subject to external definitions; instead, she claims her narrative. Her assertion that “you got tuh go there tuh know there” (p. 192) reinforces the idea that personal growth is both an internal and external journey—one rooted in self-discovery and shaped through movement across place and experience. -Alex Greeves',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'As I Lay Dying - Description',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Description of the second location.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'As I Lay Dying - Movement',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Description of the second location.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'As I Lay Dying - Analysis',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Description of the second location.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Salvage The Bones - Description',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Description of the second location.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Salvage The Bones - Movement',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Description of the second location.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Salvage The Bones - Analysis',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Description of the second location.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Overall Significance/What does all this show?',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Description of the second location.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Conclusion',
            alignment: 'left',
            hidden: false,
            title: 'Conclusion',
            image: './assets/firestone_farm.jpg',
            description: 'Description of the Olinka people',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
}
