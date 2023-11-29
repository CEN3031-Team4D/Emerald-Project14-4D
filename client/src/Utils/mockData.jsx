const LanguageItems = [
    {
      title: "Blockly",
      route: "/language/blockly",
      html: (
        <div>
          <p>
            Blockly is a client-side library for the programming language
            JavaScript for creating block-based visual programming languages
            (VPLs) and editors. A project of Google, it is free and open-source
            software released under the Apache License 2.0. It typically runs in a
            web browser, and visually resembles the language Scratch.
          </p>
          <p>
            {" "}
            Blockly uses visual blocks that link together to make writing code
            easier, and can generate code in JavaScript, Lua, Dart, Python, or
            PHP. It can also be customized to generate code in any textual
            programming language.
          </p>
        </div>
      ),
    },
    {
      title: "Scratch",
      html: (
        <div>
          <p>
            Scratch is a visual programming language that allows students to
            create their own interactive stories, games and animations. As
            students design Scratch projects, they learn to think creatively,
            reason systematically, and work collaboratively. Scratch was created
            by the Lifelong Kindergarten group at MIT Media lab and is available
            for free download at http://scratch.mit.edu. Once Scratch is
            downloaded to a computer, you do not need Internet access to create a
            project.
          </p>
        </div>
      ),
      route: "/language/scratch",
    },
    {
      title: "Cognimates ML",
      html: (
        <div>
          <p>
            Cognimates" refers to an open-source project developed by the Lifelong
            Kindergarten Group at the MIT Media Lab. The project aims to combine
            artificial intelligence (AI) with creative learning activities for
            children. The goal of Cognimates is to empower children to engage with
            and understand AI technologies in a playful and educational manner.
          </p>
          <p>
            {" "}
            Cognimates focuses on creating tools and experiences that integrate AI
            concepts into educational activities, making it more accessible and
            engaging for young learners. The project aligns with the broader
            mission of the Lifelong Kindergarten Group, which is to explore how
            new technologies can support creative learning experiences for people
            of all ages.
          </p>
        </div>
      ),
      route: "/language/cognimates",
    },
  ];
  
  export { LanguageItems };
  