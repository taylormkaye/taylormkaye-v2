const Contact = () => (
    <div className="">
        <p>Get in touch 👋</p>
        <form className="flex flex-col gap-4 px-4 py-6">
            <input
                name="name"
                type="text"
                id="name"
                placeholder="Name"
                className="form-control"
                // onChange={this.updateInput}
                // value={this.state.name}
            />
            <input
                name="email"
                type="email"
                id="email"
                placeholder="Email"
                className="form-control"
                // onChange={this.updateInput}
                // value={this.state.email}
            />
            <textarea
                rows={6}
                name="message"
                id="message"
                placeholder="Message"
                className="textbox form-control"
                // onChange={this.updateInput}
                // value={this.state.message}
            />
            <button className="btn btn-secondary" type="submit">
                Send Message
            </button>
        </form>
    </div>
);

export default Contact;
