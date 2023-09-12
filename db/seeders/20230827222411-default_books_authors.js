"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Authors",
      [
        {
          name: "Roald Dahl",
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "J.D. Salinger",
          createdAt: "2023-08-27T10:30:00Z",
          updatedAt: "2023-08-27T11:00:00Z",
        },
        {
          id: 3,
          name: "Harper Lee",
          createdAt: "2023-08-27T11:30:00Z",
          updatedAt: "2023-08-27T12:00:00Z",
        },
        {
          id: 4,
          name: "George Orwell",
          createdAt: "2023-08-27T12:45:00Z",
          updatedAt: "2023-08-27T13:15:00Z",
        },
        {
          id: 5,
          name: "Jane Austen",
          createdAt: "2023-08-27T13:45:00Z",
          updatedAt: "2023-08-27T14:15:00Z",
        },
        {
          id: 6,
          name: "J.R.R. Tolkien",
          createdAt: "2023-08-27T14:45:00Z",
          updatedAt: "2023-08-27T15:15:00Z",
        },
        {
          name: "Viktor E. Frankl",
          id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Books",
      [
        {
          id: 1,
          title: "Fantastic Mr. Fox",
          createdAt: new Date(),
          updatedAt: new Date(),
          authorId: 1,
          description:
            "The main character of Fantastic Mr. Fox is an extremely clever anthropomorphized fox named Mr. Fox. He lives with his wife and four little foxes. In order to feed his family, he steals food from the cruel, brutish farmers named Boggis, Bunce, and Bean every night.\r\n\r\nFinally tired of being constantly outwitted by Mr. Fox, the farmers attempt to capture and kill him. The foxes escape in time by burrowing deep into the ground. The farmers decide to wait outside the hole for the foxes to emerge. Unable to leave the hole and steal food, Mr. Fox and his family begin to starve. Mr. Fox devises a plan to steal food from the farmers by tunneling into the ground and borrowing into the farmer's houses.\r\n\r\nAided by a friendly Badger, the animals bring the stolen food back and Mrs. Fox prepares a great celebratory banquet attended by the other starving animals and their families. Mr. Fox invites all the animals to live with him underground and says that he will provide food for them daily thanks to his underground passages. All the animals live happily and safely, while the farmers remain waiting outside in vain for Mr. Fox to show up.",
          coverUrl: "https://covers.openlibrary.org/b/id/8739161-L.jpg",
        },
        {
          id: 2,
          title: "The Catcher in the Rye",
          createdAt: "2023-08-27T10:00:00Z",
          updatedAt: "2023-08-27T14:30:00Z",
          authorId: 2,
          description:
            "The Catcher in the Rye follows the story of Holden Caulfield, a disenchanted teenager who has been expelled from his prep school. He wanders the streets of New York City, grappling with his feelings of alienation and the hypocrisy he sees in the adult world. The novel is a classic portrayal of adolescent angst and rebellion.",
          coverUrl: "https://covers.openlibrary.org/b/id/7234145-L.jpg",
        },
        {
          id: 3,
          title: "To Kill a Mockingbird",
          createdAt: "2023-08-27T11:15:00Z",
          updatedAt: "2023-08-27T15:45:00Z",
          authorId: 3,
          description:
            "Set in the racially charged environment of the 1930s American South, To Kill a Mockingbird tells the story of Atticus Finch, a lawyer who defends a black man falsely accused of raping a white woman. Through the eyes of Atticus's young daughter Scout, the novel explores themes of racial injustice, morality, and the loss of innocence.",
          coverUrl: "https://covers.openlibrary.org/b/id/1234567-L.jpg",
        },
        {
          id: 4,
          title: "1984",
          createdAt: "2023-08-27T09:45:00Z",
          updatedAt: "2023-08-27T13:20:00Z",
          authorId: 4,
          description:
            "George Orwell's dystopian novel 1984 presents a totalitarian society where individualism is suppressed, and the government exerts complete control over every aspect of life. The story follows Winston Smith, who becomes disillusioned with the regime and begins to rebel, leading to a struggle against the Party's surveillance and manipulation.",
          coverUrl: "https://covers.openlibrary.org/b/id/9876543-L.jpg",
        },
        {
          id: 5,
          title: "Pride and Prejudice",
          createdAt: "2023-08-27T12:30:00Z",
          updatedAt: "2023-08-27T16:10:00Z",
          authorId: 5,
          description:
            "Jane Austen's Pride and Prejudice follows the complex relationship between Elizabeth Bennet and Mr. Darcy. The novel explores themes of social class, marriage, and personal growth as the characters navigate societal expectations and their own misunderstandings.",
          coverUrl: "https://covers.openlibrary.org/b/id/2345678-L.jpg",
        },
        {
          id: 6,
          title: "The Lord of the Rings",
          createdAt: "2023-08-27T14:00:00Z",
          updatedAt: "2023-08-27T17:30:00Z",
          authorId: 6,
          description:
            "J.R.R. Tolkien's epic fantasy trilogy, The Lord of the Rings, follows the journey of Frodo Baggins and his companions as they attempt to destroy the One Ring and thwart the dark lord Sauron. The tale is filled with rich world-building, intricate characters, and themes of heroism, friendship, and the struggle between good and evil.",
          coverUrl: "https://covers.openlibrary.org/b/id/2345678-L.jpg",
        },
        {
          id: 7,
          title: "Man's Search for Meaning",
          createdAt: new Date(),
          updatedAt: new Date(),
          authorId: 7,
          description:
            "Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival. Based on his own experience and the stories of his patients, Frankl argues that we cannot avoid suffering but we can choose how to cope with it, find meaning in it, and move forward with renewed purpose. At the heart of his theory, known as logotherapy, is a conviction that the primary human drive is not pleasure but the pursuit of what we find meaningful. Man's Search for Meaning has become one of the most influential books in America; it continues to inspire us all to find significance in the very act of living.",
          coverUrl: "https://covers.openlibrary.org/b/id/587796-L.jpg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
    await queryInterface.bulkDelete("Authors", null, {});
  },
};
