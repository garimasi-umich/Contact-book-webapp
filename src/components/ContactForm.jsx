import { useState } from "react";

const emptyForm = { name: "", email: "", phone: "" };

export default function ContactForm({ onAdd }) {
    const [form, setForm] = useState(emptyForm);   // what's typed in the 3 boxes
    const [errors, setErrors] = useState({});      // validation messages

    // Runs on every keystroke in any input
    const handleChange = (e) => {
        const { name, value } = e.target;            // which input, and its new text
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // Check the form; return an object of error messages
    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
            newErrors.email = "Please enter a valid email address.";
        }
        return newErrors;
    };

    // Runs when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();                          // stop the page from reloading
        const newErrors = validate();
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return; // errors exist, so stop here

        onAdd({
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
        });
        setForm(emptyForm);                          // clear the boxes
    };

    return (
        <form className="card form" onSubmit={handleSubmit} noValidate>
            <h2>Add Contact</h2>

            <div className="field">
                <label htmlFor="name">Name *</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="field">
                <label htmlFor="email">Email *</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="field">
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">Add Contact</button>
        </form>
    );
}