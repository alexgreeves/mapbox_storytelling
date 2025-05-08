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
            description: 'In Their Eyes Were Watching God, As I Lay Dying, The Color Purple, and Salvage the Bones, the physical movement of female protagonists, whether across towns, landscapes, or confined spaces, serves as a narrative mechanism through which each woman negotiates and asserts her agency. While Janie’s self-directed migrations reflect a growing autonomy in the Jim Crow South, Addie Bundren’s posthumous journey exposes the constraints placed on women’s voices and bodies even in death. In contrast, Celie’s eventual escape from domestic confinement marks her emergence into selfhood and independence, while Esch’s rootedness in Bois Sauvage reveals how agency can also be forged through resilience and survival within a fixed geography. Together, these novels reveal how Southern women’s agency is separately tied to the spaces they occupy and traverse, with physical movement acting as both a reflection of and a catalyst for personal empowerment.',
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
            description: 'Walker uses the physical movements of Celie and Nettie to illustrate how mobility becomes a pathway to female agency. Celie begins her journey trapped in an abusive home in rural Georgia, her physical immobility mirroring her psychological and social confinement. However, her relationship with Shug Avery becomes the reason for change, inspiring Celie to leave Mr. ___ and establish her own home and business. This decisive move marks her transformation from passive victim to active agent of her own life. As she explores her new house with Shug, she declares with joy, “I can’t get over having a house… Look at this, I say to Shug. Look at that!” (Walker 244). This moment symbolizes her reclaiming of space and self. Meanwhile, Nettie’s departure from the South to Africa as a missionary provides another path to liberation, allowing her to forge a new identity outside the structural and racial limitations of the American South. Both sisters' geographic journeys, Celie’s inward and rooted, Nettie’s outward and global—chart their evolution towards independence, showing how movement enables them to rewrite the conditions of their lives. -Danny Lyman',
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
            description: 'Alice Walker uses the physical movement of Celie and Nettie to show how space and mobility play a key role in gaining independence and control over one's life. Celie starts in a place of oppression, trapped in an abusive marriage, where her lack of movement represents her lack of power. But as she breaks free from her husband and builds a life of her own, she moves from being controlled to being independent. This shift shows that owning one’s space can be just as empowering as leaving it. On the other hand, Nettie’s journey to Africa represents a different kind of freedom, where her relocation allows her to grow and find herself in ways that weren’t possible in the South. These two journeys highlight how the spaces women occupy, and how they move through them, are crucial to their sense of empowerment. Together, Celie’s and Nettie’s experiences show that physical movement is an important part of claiming agency in a world where women are often oppressed. -Danny Lyman'
',
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
            description: 'William Faulkner’s As I Lay Dying follows the Bundren family as they travel across Mississippi to bury their mother, Addie, in her hometown. While the novel focuses on the physical movement of the family, Addie, herself, has little control over the journey, as she is dead in a coffin and only given one chapter to speak for herself. Her body is moved by the decisions of others, showing how women in the rural South often lacked agency, even after death. As Addie reflects in her singular chapter, she says: “My father said that the reason for living was to get ready to stay dead” (Faulker 164). This line reveals her disappointment with the roles imposed on her and the uselessness she feels in her existence. Unlike other female characters in Southern literature who find freedom through travel, Addie’s journey highlights how limited women’s voices and choices can be. Instead of gaining control through movement, her story reveals how patriarchal power continues to shape and silence women’s lives. -Danny Lyman,'
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
            description: 'Faulkner uses the Bundren family’s journey from their rural farm in Yoknapatawpha County to the town of Jefferson, Mississippi, to highlight the limited agency of women in the South. Although the novel centers on physical movement, Addie Bundren has no control over her posthumous journey and is largely silenced, reflecting how her body and autonomy are shaped by others. Her brief, post-death narration reveals deep dissatisfaction with the roles imposed on her, but it comes too late to influence the events around her. Similarly, her daughter Dewey Dell attempts to assert control by traveling to a drugstore in Mottson to seek an abortion, but she is manipulated and ultimately denied help, reinforcing her powerlessness. Addie and Dewey Dell’s experiences across Yoknapatawpha, Mottson, and Jefferson reveal how women’s attempts at autonomy are often restricted by societal structures. -Danny Lyman',
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
            description: 'Faulkner tells a story that’s all about movement, but for the women in the novel, especially Addie and Dewey Dell. That movement however, doesn’t give them freedom, it just shows how stuck they really are. Addie is the reason the family travels, but she’s dead, stuck in a coffin, and only gets one short chapter to tell her side of things. Even then, it’s too late for her to make any real impact. The novel shows Addie’s lack of agency, even in death, as her family struggles to bring her coffin to Jefferson. The trip to Jefferson isn’t just a physical journey—it reveals how women’s choices are often taken away from them. While the men in the novel keep moving forward, the women’s stories show how hard it is to escape the expectations and control of the world around them. -Danny Lyman',
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
            description: 'Jesmyn Ward’s Salvage the Bones is a powerful novel that follows twelve days in the life of Esch Batiste, a pregnant teenager living in the fictional rural town of Bois Sauvage, Mississippi, as Hurricane Katrina approaches. Told entirely from Esch’s perspective, the narrative immerses the reader in a world shaped by poverty, isolation, and environmental vulnerability. Ward conveys the uncertainty of life in the modern Black rural South. Esch’s voice—lyrical, raw, and resilient—guides us through a collapsing world where survival is both a physical and emotional struggle. The novel’s tight timeline and spatial confinement reveal how Esch’s growth is intimately tied to her relationship with space and movement within the boundaries of Bois Sauvage, offering a sharp contrast to traditional Southern narratives of expansive journey and escape. -Alex Greeves',
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
            description: 'While Ward’s story does not follow a wide-ranging physical journey, it traces constant and urgent movement within a single, precarious space. The story remains rooted in one geographic location, but through the shifting terrain of junkyards, woods, and flood zones. Esch and her brothers shift repeatedly between home and survival spaces—digging trenches, scavenging supplies, and eventually fleeing floodwaters. These short, reactive movements mirror the instability of their socioeconomic condition and the environmental uncertainties that they endure. Esch’s internal transformation parallels this spatial urgency: her movement is not toward escape, but toward recognition of her own strength. Esch declares, “China will bark and call me sister. In the star suffocated sky, there is a great waiting silence. She will know that I’m a mother” (Ward 258). In this moment, Ward affirms that even within confinement and crisis, movement, both physical and emotional, can foster the emergence of female agency. -Alex Greeves',
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
            description: 'Ward’s decision to center her story in a single, marginalized location allows her to explore how confinement and catastrophe shape agency differently than in stories of outward migration. Bois Sauvage, though physically limited, becomes the reason in which Esch asserts her voice and identity. The storm does not transport her elsewhere but transforms the space around her, forcing her to confront her pregnancy, her grief, and her fractured family bonds within the same terrain. Unlike narratives in which women gain agency by leaving oppressive environments, Esch finds strength by staying and enduring. Her voice, sharpened through both mythic imagination and physical survival, becomes her tool of resistance. Ward reframes movement not as a means of escape but as a response to crisis—showing that agency can emerge even when there is nowhere else to go. Through Esch, Salvage the Bones redefines what it means for a Southern woman to move, to resist, and to endure. -Alex Greeves ',
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
