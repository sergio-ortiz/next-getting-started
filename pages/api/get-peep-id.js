import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const peep = await prisma.person.findFirst({
    where: {
      firstName: {
        equals: body.first,
      },
      lastName: {
        equals: body.last,
      },
    },
  });

  if (!peep) {
    return res.status(400).json({ data: "peep not found" });
  }

  res.status(200).json({ id: peep.id });
}
