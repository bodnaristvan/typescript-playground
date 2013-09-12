import sbt._
import Keys._
import play.Project._
import com.inplaytime.SbtGruntTask

object ApplicationBuild extends Build {

  val appName         = "typescript-playground"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    // Add your project dependencies here,
    jdbc,
    anorm
  )

  val main = play.Project(appName, appVersion, appDependencies).settings(
	SbtGruntTask.gruntTaskSettings,
	
	requireJs += "main.js"
  )

}
