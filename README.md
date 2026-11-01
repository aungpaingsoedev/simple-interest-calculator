# Simple Interest Calculator

A small browser calculator that finds **simple interest** and the **total amount** from three inputs: principal, annual interest rate, and time.

Simple interest is interest earned only on the original principal. It does not compound.

## Formula

```text
SI = (P × R × T) / 100
```

| Symbol | Meaning |
| --- | --- |
| **SI** | Simple interest |
| **P** | Principal (the starting amount) |
| **R** | Annual interest rate, in percent |
| **T** | Time, in years |

The total amount is the principal plus the interest:

```text
Total Amount = P + SI
```

## Example

Principal **P = 1000**, rate **R = 5%**, time **T = 2** years:

```text
SI = (1000 × 5 × 2) / 100 = 100
Total Amount = 1000 + 100 = 1100
```

## How to run

1. Clone this repository, or download the files.
2. Open `index.html` in a web browser (double-click the file, or use File → Open).
3. Enter:
   - **Principal (P)** — for example, `1000`
   - **Rate % (R)** — for example, `5`
   - **Time in years (T)** — for example, `2`
4. Click **Calculate**.

The page shows **Simple Interest** and **Total Amount**. Click **Clear** to start over.

No install, server, or build step is required. The page uses only `index.html`, `style.css`, and `script.js`.

## Project structure

```text
simple-interest-calculator/
├── README.md    # This explanation
├── index.html   # Page layout and the input form
├── style.css    # Layout and colors
└── script.js    # Calculates simple interest when you click Calculate
```

`script.js` reads the three inputs, computes `SI = (P × R × T) / 100`, then displays the interest and `P + SI`.
