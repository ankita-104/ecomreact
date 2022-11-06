import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <Wrapper>
     <h2 className="common-heading">Contact page</h2>

<iframe
 src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d59394.991403567336!2d83.85767450690936!3d21.500395568394378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3a213da4ec28af2d%3A0xb33a5cc9af8c33c7!2sVSSUT%2C%20Burla%2C%20Odisha!3m2!1d21.4971089!2d83.903756!4m5!1s0x3a213c51acd9c7e1%3A0xc1dbc6da57955e3!2sHotel%20Janata%2C%20near%20Bus%20Stand%2C%20Bharati%20Club%20Chowk%2C%20Burla%2C%20Odisha%20768017!3m2!1d21.497104!2d83.8818048!5e0!3m2!1sen!2sin!4v1667571814515!5m2!1sen!2sin" 
 
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>

<div className="container">
  <h2>Details</h2>
  <div className="contact-form">
    <form
      action="https://formspree.io/f/mvoyvnyq"
      method="POST"
      className="contact-inputs">
      <input
        type="text"
        placeholder="username"
        name="username"
        required
        autoComplete="off"
      />

      <input
        type="email"
        name="Email"
        placeholder="Email"
        autoComplete="off"
        required
      />

      <textarea
        name="Message"
        cols="30"
        rows="10"
        required
        autoComplete="off"
        placeholder="Enter you message"></textarea>

      <input type="submit" value="send" />
    </form>
  </div>
</div>
  </Wrapper>
  );
};

export default Contact;
