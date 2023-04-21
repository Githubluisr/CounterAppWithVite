import { getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-Imp-exp", () => {
	test("Heroes son los correctos de DC", () => {
		const heroesDC = [
			{
				id: 1,
				name: "Batman",
				owner: "DC",
			},
			{
				id: 3,
				name: "Superman",
				owner: "DC",
			},
			{
				id: 4,
				name: "Flash",
				owner: "DC",
			},
		];

		const owner = "DC";
		const heroes = getHeroesByOwner(owner);
		expect(heroes).toStrictEqual(heroesDC);
	});

  test('Heroes de DC deben ser 3', () => {
    const heroesLength = getHeroesByOwner('DC').length;
    //console.log(heroesLength);

   expect(heroesLength).toBe(3);   
  })


  test("Heroes son los correctos de Marvel", () => {
		const heroesMarvel = [
      {
          id: 2,
          name: 'Spiderman',
          owner: 'Marvel'
      },
      {
          id: 5,
          name: 'Wolverine',
          owner: 'Marvel'
      },
    ];

		const owner = "Marvel";
		const heroes = getHeroesByOwner(owner);
		expect(heroes).toStrictEqual(heroesMarvel);
	});

});
