export const welcome = (req, res) => {
  res.json({
    data: "hello i am talking from auth controller"
  })
}
export const preRegister = async (req, res) => {
  try {
    //create jwt with email and passowrt then email as clickable link
    //only when user click on that email link, registration competes
    console.log(req.body);

    const emailSent = true;
    if (emailSent) {
      return res.json({ ok: true });
    } else {
      return res.json({ ok: false });
    }

  } catch (err) {
    console.log(err);
    return res.json({ error: "somethin went wrong. Try again" })

  }
}