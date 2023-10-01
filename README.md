# Only Digital task
## Links
[gh Pages](https://airgrinder.github.io/OnlyCodeTest/dist/)
[Figma](https://www.figma.com/file/YXCbNT4Jf9INk62BKTZw1z/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=0%3A1)
[Word letter with description](https://docs.google.com/document/d/1Qy4MN7duYzm-Wr-rQ4TFApvUoxfuqGXdcyA8-vt5Dhg/edit)
[gh Repository](https://github.com/Airgrinder/OnlyCodeTest)
---
## Installation
To get started, clone the repository by running the following command in your console:
```git clone https://github.com/Airgrinder/OnlyCodeTest.git```
Once the download is complete, navigate to the project folder and install the required dependencies:
```npm install```
---
## Starting the Webpack Dev Server
To start the Webpack Dev Server, run the following command in your console:
```npm run start```
---
## Building for Production
To build the project for production, execute the following command in your console:
```npm run build```
After the build process is complete, you will find a 'dist' folder in the project's root directory.
---
### Note:
In the spinner design, it has been noticed that the dots representing available slides are not evenly distributed. This leads to a discrepancy with the actual implementation.

In the slider (Swiper), according to the layout, the middle slide should have a larger width compared to the other two, which should be narrower. However, for the correct operation of the slider, it is necessary for all slides to have the same width. Therefore, a decision was made to set a fixed width for all slides.
