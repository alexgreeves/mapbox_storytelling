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
            image: 'https://biblioklept.org/wp-content/uploads/2022/04/screenshot-2022-04-15-1.44.14-pm.png?w=739',
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
            description: 'Alice Walker’s The Color Purple tells the story of Celie, a black woman in Georgia, whose transformation from a meek, powerless girl into a strong, independent woman, is made possible through the assistance of the strong female character of Shug.. At the beginning of the novel, Celie has limited agency as she is strongly controlled by her heartless husband. Throughout the novel, her physical movement influences her growth as a female character as she leaves her husband’s home, showing her growing sense of agency. Her eventual ownership of a home and business marks a powerful shift from confinement to control. Celie’s journey shows that reclaiming one’s space can be just as empowering as leaving it. Her transformation illustrates how physical and emotional movement work together to strengthen her identity and give her the power to define her own life. -Danny Lyman',            location: {
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
            id: 'chapter-two',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple - Movement',
            image: '',
            description: 'Walker uses the physical movements of Celie and Nettie to show how movement leads to female agency. Celie begins her journey trapped in an abusive home, with her physical placement reflecting her lack of control and weak-mindedness. However, her relationship with Shug becomes the reason for change, inspiring Celie to leave Mr. ___ and establish her own home and business. This new relationship with Shug becomes the reason she is able to transition from a passive victim to an active decision maker in her own life. As she reflects on her new life with Shug, she recognizes the power that female empowerment brings, as she says, “I can’t get over having a house… Look at this, I say to Shug. Look at that!” (Walker 244). This moment symbolizes Celie reclaiming space and her identity. Meanwhile, Nettie’s travels to South Africa as a missionary show another way to gain empowerment and agency, allowing her to create a new identity outside of the structural and racial limitations of the American South. Both sisters' contrasting journeys show the different ways in which a female can work towards independence, showing how movement enables them to redefine the conditions of their lives. -Danny Lyman',
            location: {
                center: [-10.335151559799025,6.248908306766154], 
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
            id: 'chapter-three',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple - Analysis',
            image: '',
            description: 'Alice Walker uses the physical movement of Celie and Nettie to show how space and mobility play a key role in gaining independence and control over your life. Celie begins as a weak character trapped in an abusive marriage, where her lack of movement represents her lack of power. As Celie breaks free from her husband and builds a life of her own, she moves from being controlled to being independent. This shift shows that taking control of your own space can be just as empowering as leaving it. On the other hand, Nettie’s journey to Africa represents a different form of freedom, with her movement allowing her to grow and find herself in ways that weren’t possible in the South. These two journeys demonstrate the different ways in which women take advantage of movement to gain empowerment and truly find themselves. Together, Celie’s and Nettie’s experiences show that physical movement is an important part of claiming agency in a world where women are often oppressed. -Danny Lyman',
            location: {
                center: [-83.5573651,32.5573651], 
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
            id: 'chapter-four',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes Were Watching God - Description',
            image: 'https://www.arts.gov/sites/default/files/Their%20Eyes%20Were%20Watching%20God.jpg',
            description: ' Zora Neale Hurston’s Their Eyes Were Watching God stands as following the life of Janie Crawford, a Black woman in early 20th-century Florida whose personal growth is deeply tied to her movement across physical landscapes. She starts her journey at her grandmother’s rural home in West Florida, then she eventually goes to Eatonville, and finally she ends up in the Everglades and then back. Janie’s journey reflects a gradual assertion of autonomy in the face of restrictive gender and racial norms. She learns that being a black woman in the south during this time is not easy. Each location signals a different stage in her evolving sense of self: the imposition of duty, the stifling expectations of marriage, and finally, the pursuit of emotional fulfillment. Hurston captures this progression with vivid attention to Southern geography, embedding Janie’s transformation in specific regional and cultural settings. -Alex Greeves',
            location: {
                center: [-81.39224619001222,28.54026337989474], 
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
            id: 'chapter-five',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes Were Watching God - Movement',
            image: '',
            description: 'The physical movements in Janie’s life correspond closely with shifts in her personal agency and relationship dynamics. Her early life in West Florida is defined by her grandmother’s overly protective control, which ends up in a forced marriage to Logan Killicks that prioritizes security over love. Janie’s eventual decision to leave Logan for Joe Starks leads her to Eatonville, where she becomes the mayor’s wife and gains visibility but loses autonomy and freedom. Her voice is suppressed even as her social status rises. It is not until her third move, south to the Everglades with Tea Cake, that Janie experiences greater relational and spatial freedom. Living among migrant laborers and sharing in physical labor, she finds companionship that approaches the idealized love she once imagined. However, the freedom of this space is uncertain, as symbolized by the hurricane that displaces their lives. Janie’s final return to Eatonville, now on her own terms, signals a reentry into society as an independent woman. As Janie affirms upon her return, “Ah done been tuh de horizon and back and now Ah kin set heah in mah house and live by comparisons” (p. 191), she is getting at the idea that she is not just talking about travel; she’s expressing the wisdom that comes from lived experience. The “horizon” symbolizes all the unknowns she dared to explore—emotionally, romantically, and spiritually. By the time she returns home, she’s not the same woman who left—she has the perspective and self-awareness to understand what those experiences meant and how they shaped her. Each stage of her journey is marked by a growing capacity to define love and selfhood outside of societal expectations. -Alex Greeves',
            location: {
                center: [-80.03213,26.43352], 
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
            id: 'chapter-six',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes Were Watching God - Analysis',
            image: '',
            description: 'Janie’s geographic journey could function as a metaphor for her growing sense of agency and personal identity. Initially, her movements are reactive—decisions made for her by others, such as her grandmother or Joe Starks. These early moves in her life are not expressions of free will, but are examples of how her body and future are treated like somehthing to be managed or protected. It is clear that her lack of control here highlights how little agency she truly has, even as she enters adulthood. However, with her move to the Everglades, this dynamic begins to shift. This is the first time Jane makes a decision based on her own desires rather than someone elses fears or ambitions. Even though the muck is physically taxing, it is also emotionally liberating. Her bond with Tea Cake, while complicated at times, offers her a chance to experience a love that feels somewhat reciprocal. Their shared life is imperfect but real, and through that reality, Janei starts to understand what it means to live on her own terms. Even the hurricane, while bringing all the trauma and destruction, becomes a turning point. It tests her strength and forces her to act decisively, something she could not do in her earlier relationships.By the time she returns to Eatonville, Janie has transformed. Her statement that “you got tuh go there tuh know there” (p. 192) reflects the hard-earned truth that identity is not something that is always handed to you, it is something that you discover through experience. Her journey ultimately shows that personal growth is not linear or easy, but it is shaped by hardship, love, movement, and reflection. -Alex Greeves',
            location: {
                center: [-81.38643808791495,28.618579170446417], 
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
            id: 'chapter-seven',
            alignment: 'right',
            hidden: false,
            title: 'As I Lay Dying - Description',
            image: 'https://images.penguinrandomhouse.com/cover/9780679732259',
            description: 'William Faulkner’s As I Lay Dying follows the Bundren family as they travel across Mississippi to bury their mother, Addie, in her hometown. The novel focuses on the physical movement of the family and shows Addie’s lack of control over the journey, as she is dead in a coffin and only given one chapter to speak for herself. Her body is transported through the decisions of others, showing how women in the South often lacked agency, even after death. As Addie reflects in her singular chapter, she says: “My father said that the reason for living was to get ready to stay dead” (Faulker 164). This line reveals her feelings regarding being a female in this time period in the South and shows the pointlessness she feels in life. Unlike other female characters that we have analyzed throughout this course who find freedom through travel, Addie’s journey illustrates how limited women’s voices and choices can be. Instead of gaining control through movement, Addie’s story reveals how patriarchal power controls and determines women’s lives. -Danny Lyman',
            location: {
                center: [-89.48848661057376,34.28249827482276], 
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
            id: 'chapter-eight',
            alignment: 'right',
            hidden: false,
            title: 'As I Lay Dying - Movement',
            image: '',
            description: 'Faulkner uses the Bundren family’s journey from their farm in Yoknapatawpha to Jefferson, Mississippi, to show the limited agency of women in the South. Although the novel focuses on the physical transportation of Addie’s coffin, Addie has no control over her journey and is not given many lines to reflect her feelings, showing how her body and life choices are determined by others. Her brief, post-death narration reveals deep dissatisfaction with the roles imposed on her, but it comes too late to change the nature of the journey, where her family carelessly transports her carcass to her resting place. Similarly, her daughter Dewey Dell, wanting an abortion, is taken advantage of and mocked by the store owner, ultimately rejecting her decision. Addie and Dewey Dell’s experiences traveling from Yoknapatawpha to Jefferson brings to light how women’s attempts to control their own life choices are often restricted by societal structures. -Danny Lyman',
            location: {
                center: [-89.49712705893592,34.28822352093646], 
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
            id: 'chapter-nine',
            alignment: 'right',
            hidden: false,
            title: 'As I Lay Dying - Analysis',
            image: '',
            description: 'Faulkner tells a story that’s all about a slow, unsettling journey, focusing on the restrictions and control of Addie and Dewey Dell. The movement in this novel doesn\'t give them freedom, it just shows how stuck they really are. Addie is the reason the family travels, but she’s dead, stuck in a coffin, and only gets one short chapter to tell her side of things. Even then, it’s too late for her to make any real impact. The novel shows Addie’s lack of agency, even in death, as her family struggles to bring her coffin to Jefferson. The trip to Jefferson isn’t just a physical journey, as it subtly reveals how women’s choices are often taken away from them. While the men in the novel keep moving forward, the women\’s stories show how hard it is to escape the expectations and control of the world around them. -Danny Lyman',
            location: {
                center: [-89.51788515537622,34.36817121721822], 
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
            image: 'https://m.media-amazon.com/images/I/91qUGKmdYzL.jpg',
            description: 'Jesmyn Ward’s Salvage the Bones is a powerful and intimate novel that spans twelve days in the life of Esch Batiste, a pregnant teenaged girl who lives in the rural town of Bois Sauvage, Mississippi, right around the time Hurricane Katrina hits. While the story is told from the perspective of Esch, the novel immerses the reader in a world shaped by deep poverty, social marginalization, and the looming threat of a natural disaster. Ward captures the fragility of life in the modern day Black South, were the enviornment itself is an unpredictable force and survival is never guarenteed. Eschs voice is central to this narrative, as it is observant and emotionally rich. Her way of seeing the world gives the novel a poetic kind of quality, which blends myth and memory with realism. Her experiences are only really confined within the physcial boundaries of Bois Sauvage, but this confinement does not limit the depth of her development. -Alex Greeves',
            location: {
                center: [-89.26344602946764,30.37877669386771], 
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
            image: '',
            description: 'While Ward’s story does not follow a wide-ranging physical journey, it traces constant and urgent movement, often small and frantic, within a single space. The Batiste children move constantly through a landscape of instability: from junkyard to the house, through the woods, and eventually to higher ground as the flood rises. These shorter and more reactive movements do not lead to new places, but they capture their desperate pace of survival. The way they scramble for and sometimes steal last minute supplies, dig trenches, and make last minute decisions, show how close they are with their envionrment, and how quickly that enviornment can turn against them as well. For Esch, these kinds of movements are mirrored internally. Her own development is not about running away, but about coming into a better understanding of herself, her body, her relationships, and her emerging sense of strength. The storm is an example of her need to reckon with what it means to be a mother, even before her child is born. She reflects  “China will bark and call me sister. In the star suffocated sky, there is a great waiting silence. She will know that I’m a mother” (Ward 258). This moment is filled with symbolic weight. China represents both violence and protection, and Esch draws a comparison to her newly found recognition of her own power. Esch is not running or hiding, but rather she is claiming a new identity through crisis. Ward here claims that even in the most confined spaces, when the options for movement are limited, growth and agency can still come to light. -Alex Greeves',
            location: {
                center: [-89.26848521528085,30.401175819706324], 
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
            image: '',
            description: 'Ward’s decision to root her story in a single Southern town allows her to rethink what movement ultimately means. Instead of escaping to find freedom, Esch stays and the act of staying becomes revolutionary in itself. Bois Sauvage is not just a landscape, but it is a ground where Esch can find her identity. The storm also does not carry her away to a new beginning, it transforms the world around her and forces her to reimagine her role in it.Everything Esch endures happens in one space, yet this does not make her journey any less meaningful or dynamic. What really makes this novel powerful is that Esch does not need to leave in order to become stronger. Her transformation is subtle but apparent. Ward rethinks movement not as a physcial departure, but more as a emotional and psychological response to crisis. There is a common theme here: that agency is not found in motion, but also in resilience. Esch redefines what it means for a Southern Black girl to move, resist, and emerge stronger in her own enviornment. -Alex Greeves ',
            location: {
                center: [-89.2676805526253,30.403299510701547], 
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
            image: '',
            description: 'By mapping the physical movements of female protagonists across these Southern narratives, we gain deeper insight into how geography functions not just as setting, but as a critical lens for understanding women’s agency. In each novel, movement—whether expansive, restricted, or reoccuring—reflects a negotiation of power within the structures of race, gender, and class. Janie’s travels across Florida reveal her growing control over love and self-definition; Addie and Dewey Dell’s foiled journeys in Mississippi expose the limits placed on women’s voices and choices; Celie and Nettie’s contrasting migrations show how both reclaiming space and crossing borders can lead to empowerment; and Esch’s rooted resilience in Bois Sauvage demonstrates that agency can also emerge within confinement. Through spatial analysis, these stories collectively challenge the idea that freedom is always found through escape, instead showing that power can be seized through motion, stillness, survival, or return. Mapping these movements brings to light the varied ways Southern women navigate oppression, and how their paths—visible and invisible—speak to the intersections of place, body, and voice. -Both,
            location: {
                center: [-78,38], 
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
            image: 'https://southernspaces.org/app/uploads/2019/07/mackethan-pastoralscene.jpg',
            description: 'Overall, examining how female characters in Southern literature travel and move throughout the novels demonstrates to readers how freedom, power, and identity can be gained through many different ways. These stories do not simply map physical journeys; instead, they reshape the idea of movement itself, as they show the ways in which different forms of movement can lead to female empowerment.. As we map the locations of these women’s lives from the novels, it is made apparent that agency is not a fixed destination, but is a journey shaped by landscape, memory, and voice. These texts focus on whose stories get told, what characters have agency to travel and what characters remain stagnant. These texts illustrate the different outcomes depending on their agency and ability to travel. Through textual mapping, it is shown not only where these women go, but also how movement can influence an individual’s overall sense of identity and agency, leading to overall empowerment. -Danny Lyman',
            location: {
                center: [-78,38], 
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
