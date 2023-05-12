package internal

import (
	"fmt"

	"net/http"

	"github.com/gin-gonic/gin"
)

func signupRoutes(rg *gin.RouterGroup) {
	users := rg.Group("/signup")

	users.POST("/", func(c *gin.Context) {
		fmt.Println("accessed signup")
		fmt.Println(c)
		c.JSON(http.StatusOK, "users")
	})
}
