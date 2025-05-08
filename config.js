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
            image: '',
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
            image: './assets/color_purple_cover.jpg',
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
            image: '.https://www.arts.gov/sites/default/files/Their%20Eyes%20Were%20Watching%20God.jpg',
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
            image: 'data:image/jpeg;base64,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',
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
            description: 'By mapping the physical movements of female protagonists across these Southern narratives, we gain deeper insight into how geography functions not just as setting, but as a critical lens for understanding women’s agency. In each novel, movement—whether expansive, restricted, or reoccuring—reflects a negotiation of power within the structures of race, gender, and class. Janie’s travels across Florida reveal her growing control over love and self-definition; Addie and Dewey Dell’s foiled journeys in Mississippi expose the limits placed on women’s voices and choices; Celie and Nettie’s contrasting migrations show how both reclaiming space and crossing borders can lead to empowerment; and Esch’s rooted resilience in Bois Sauvage demonstrates that agency can also emerge within confinement. Through spatial analysis, these stories collectively challenge the idea that freedom is always found through escape, instead showing that power can be seized through motion, stillness, survival, or return. Mapping these movements brings to light the varied ways Southern women navigate oppression, and how their paths—visible and invisible—speak to the intersections of place, body, and voice. -Alex Greeves',
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
            description: 'Ultimately, examining how female characters in Southern literature interact with space encourages us to reconsider traditional narratives of freedom, power, and progress. These stories do not simply chart physical journeys—they reshape our understanding of movement itself, showing that empowerment can be slow, stagnant, fragmented, or deeply localized. As we map the complex geographies of these women’s lives, we are reminded that agency is not a fixed destination but a process negotiated through landscape, memory, and voice. These texts compel us to listen more closely to whose stories get told, who moves and who is made to stay still, and how place continues to shape the possibilities of becoming. Through literary mapping, we begin to see not only where these women go, but how they carry the South with them in every step. -Danny Lyman',
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
