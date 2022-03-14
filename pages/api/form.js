import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const body = req.body;

  const peep = await prisma.person.findFirst({
    where: {
      firstName: body.first,
      lastName: body.last,
    },
  });

  if (!peep) {
    return res.status(400).json({ data: "peep not found" });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ id: peep.id });
}
